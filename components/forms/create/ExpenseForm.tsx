'use client'
import Link from 'next/link';

export default function ExpenseForm() {

    // Expense name and expense value
    const personInfo = (
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                    Name
                </label>
                <div className="mt-2">
                    <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Expense name, example: rent, bills, cat food"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                </div>
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="total" className="block text-sm/6 font-medium text-gray-900">
                    Total
                </label>
                <div className="mt-2">
                    <input
                        id="total"
                        name="total"
                        type="text"
                        placeholder="Total amount"
                        defaultValue={'$'}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                </div>
            </div>
        </div>
    );


    return (
        <form>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">Customer information</h2>
                    <p className="mt-1 text-sm/6 text-gray-600">Name and details of customer.</p>

                    {personInfo}
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <Link href={'/groupawesome/expenses'}>
                    <button type="button" className="text-sm/6 font-semibold text-gray-900">
                        Cancel
                    </button>
                </Link>
                <button
                    type="submit"
                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    Save
                </button>
            </div>
        </form>
    )
}
