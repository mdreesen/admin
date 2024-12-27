import { Suspense } from "react";
import { expenses } from "@/actions/expenses";
import { revenuePerMonth } from "@/actions/revenue";
import { customersPerMonth } from "@/actions/customers";

// Charts
import { UseRevenueChart } from "@/components/UseRevenueChart";
import { UseCustomersChart } from "@/components/UseCustomersChart";
import { UseExpensesChart } from '@/components/UseExpensesChart';

export default async function Page() {

    // Chart Data
    const allExpenses = await expenses();
    const allRevenue = await revenuePerMonth();
    const allCustomers = await customersPerMonth();

    const teamSection = (
        <div className="relative lg:col-span-3 border-solid rounded-md p-2 content-center">
            <h2 className="text-base/7 font-semibold text-indigo-900">Revenue</h2>
            <Suspense fallback={<div>Loading...</div>}>
                <UseRevenueChart data={allRevenue} />
            </Suspense>
        </div>
    );

    const customerSection = (
        <div className="relative lg:col-span-3 border-solid rounded-md p-2 content-center">
            <h2 className="text-base/7 font-semibold text-indigo-900">Customers Per Month</h2>
            <Suspense fallback={<div>Loading...</div>}>
                <UseCustomersChart data={allCustomers} />
            </Suspense>
        </div>
    );

    const expensesChart = (
        <div className="relative lg:col-span-6 content-center justify-items-center">
            <h2 className="text-base/7 font-semibold text-indigo-900">Expenses</h2>
            <Suspense fallback={<div>Loading...</div>}>
                <UseExpensesChart data={allExpenses} />
            </Suspense>
        </div>
    );

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-base/7 font-semibold text-indigo-900">Company</h2>
                <p className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
                    Awesome Company INC.
                </p>
                <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-3">
                    {teamSection}
                    {customerSection}
                    {/* {revenueChart}
                    {customersChart} */}
                    {expensesChart}
                </div>
            </div>
        </div>
    )
}
