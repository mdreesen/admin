"use server";
import { connectDB } from "@/lib/mongodb";
import Group from "@/(models)/Group";
import { currentYear } from "@/lib/date";
import { revalidatePath } from 'next/cache';

export async function updateSettings(values: any) {
    const { email, use_my_location, currentLocation } = values;

    const filters = {

    }

    try {
        await connectDB();

        await Group.findOneAndUpdate({ email: email }, { filters: { ...filters }});

        revalidatePath('/');

    } catch (e) {
        console.log(e)
        return e
    }
}

export async function fetchGroup() {
    try {
        await connectDB();
        const data = await Group.find({})
        return data[0]
    } catch (error) {
        console.log(error)
        return error
    }
}