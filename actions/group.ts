"use server";
import { connectDB } from "@/lib/mongodb";
import Group from "@/(models)/Group";
import { currentYear } from "@/lib/date";

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

