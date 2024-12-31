"use server";

import { connectDB } from "@/lib/mongodb";
import Group from "@/(models)/Group";
import bcrypt from "bcryptjs";

export const register = async (values: any) => {
    const { email, password, confirm_password, group_name } = values;

    const hashedPassword = await bcrypt.hash(password, 10);

    console.log(values);

    try {
        await connectDB();

        if(await Group.findOne({ group_name })) return { error: 'Team already exists, please pick another name' };
        if(confirm_password !== password) return { error: 'Passwords do not match!' };

        const group = new Group({
            group_name: group_name,
        });

        const isUser = {
            email: email,
            password: hashedPassword,
            role: 'admin',
            status: 'active'
        };

        const groupSettings = {
            showCustomers: true,
            showExpenses: true,
            showInvoices: true,
            showRevenue: true,
            showRevenueChart: true,
            showCustomersChart: true,
            showExpensesChart: true,
            showTeam: true,
        };

        const save = await group.save();

        const user = await Group.findOneAndUpdate({ _id: save._id }, { $addToSet: { team: isUser } }, { new: true });
        const settings = await Group.findOneAndUpdate({ _id: save._id }, { settings: groupSettings }, { new: true });


    } catch (e) {
        console.log(e);
    }
}