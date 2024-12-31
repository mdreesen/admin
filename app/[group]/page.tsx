import { Suspense } from "react";
import { group } from '@/actions/group';
import { revenuePerMonth } from "@/actions/revenue";
import { customersPerMonth } from "@/actions/customers";

// Charts
import { UseRevenueChart } from "@/components/UseRevenueChart";
import { UseCustomersChart } from "@/components/UseCustomersChart";
import { UseExpensesChart } from '@/components/UseExpensesChart';

export default async function Page() {

    const useGroup = await group();
    const useSettings = useGroup.settings;
    const useExpenses = useGroup.expenses;

    // Chart Data
    const allRevenue = await revenuePerMonth();
    const allCustomers = await customersPerMonth();

    const revenueSection = useSettings.showRevenueChart && (
        <div className="relative lg:col-span-3 border-solid rounded-md p-2 content-center">
            <h2 className="text-base/7 font-semibold text-indigo-900">Revenue</h2>
            <Suspense fallback={<div>Loading...</div>}>
                <UseRevenueChart data={allRevenue} />
            </Suspense>
        </div>
    );

    const customerSection = useSettings.showCustomersChart && (
        <div className="relative lg:col-span-3 border-solid rounded-md p-2 content-center">
            <h2 className="text-base/7 font-semibold text-indigo-900">Customers Per Month</h2>
            <Suspense fallback={<div>Loading...</div>}>
                <UseCustomersChart data={allCustomers} />
            </Suspense>
        </div>
    );

    const expensesChart = useSettings.showExpensesChart && (
        <div className="relative lg:col-span-3 content-center">
            <h2 className="text-base/7 font-semibold text-indigo-900">Expenses</h2>
            <Suspense fallback={<div>Loading...</div>}>
                <UseExpensesChart data={useExpenses} />
            </Suspense>
        </div>
    );

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-base/7 font-semibold text-indigo-900">Company</h2>
                <p className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
                    {useGroup.group_name}
                </p>
                <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
                    {revenueSection}
                    {customerSection}
                    {expensesChart}
                </div>
            </div>
        </div>
    )
}
