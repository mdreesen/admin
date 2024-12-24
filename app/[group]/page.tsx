import { Suspense } from "react";
// Charts
import { UseRevenueBarChart } from "@/components/UseRevenueBarChart";
import { UseDonutChart } from '@/components/UseDonutChart';

// Cards
import Admins from '@/components/cards/Admins';
import Customers from '@/components/cards/Customers';


export default async function Page() {

    const topFirst = (
        <div className="relative lg:col-span-3 border-solid border-2 border-grey-500 rounded-md p-2">
            <h2 className="text-base/7 font-semibold text-indigo-900 border-b-2 border-grey-300">Team</h2>
            <Suspense fallback={<div>Loading...</div>}>
                <Admins />
            </Suspense>
        </div>
    );

    const topSecond = (
        <div className="relative lg:col-span-3 border-solid border-2 border-grey-500 rounded-md p-2">
            <h2 className="text-base/7 font-semibold text-indigo-900 border-b-2 border-grey-300">Customers</h2>
            <Suspense fallback={<div>Loading...</div>}>
                <Customers />
            </Suspense>
        </div>
    );

    const bottomFirst = (
        <div className="relative lg:col-span-2">
            <h2 className="text-base/7 font-semibold text-indigo-900">Revenue</h2>
            <Suspense fallback={<div>Loading...</div>}>
                <UseRevenueBarChart />
            </Suspense>
        </div>
    );

    const bottomSecond = (
        <div className="relative lg:col-span-2">
            <h2 className="text-base/7 font-semibold text-indigo-900">Expenses</h2>
            <Suspense fallback={<div>Loading...</div>}>
                <UseDonutChart />
            </Suspense>
        </div>
    );

    const bottomThird = (
        <div className="relative lg:col-span-2">
            <h2 className="text-base/7 font-semibold text-indigo-900">Customers Per Month</h2>
            <Suspense fallback={<div>Loading...</div>}>
                <UseRevenueBarChart />
            </Suspense>
        </div>
    );

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-base/7 font-semibold text-indigo-900">Company</h2>
                <p className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
                    Your Company Name
                </p>
                <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
                    {topFirst}
                    {topSecond}
                    {bottomFirst}
                    {bottomSecond}
                    {bottomThird}
                </div>
            </div>
        </div>
    )
}
