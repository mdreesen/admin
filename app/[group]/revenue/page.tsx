import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import { allRevenue } from '@/actions/revenue';
import Link from 'next/link';

export default async function Page() {
    const revenue = await allRevenue();

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold text-gray-900">Revenue</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        Revenue for Awesome Group INC.<br />
                        Note: this adds in paid invoices
                    </p>
                </div>
                <div className="flex justify-end mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button
                        type="button"
                        className="block rounded-md bg-gray-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900"
                    >
                        Add invoice
                    </button>
                    <button
                        type="button"
                        className="block rounded-md bg-gray-800 px-3 py-2 ml-4 text-center text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900"
                    >
                        Export
                    </button>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                    >
                                        Invoice ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Date Paid
                                    </th>
                                    <th
                                        scope="col"
                                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Company
                                    </th>
                                    <th
                                        scope="col"
                                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Commision
                                    </th>
                                    <th
                                        scope="col"
                                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Expense for Project
                                    </th>
                                    <th
                                        scope="col"
                                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Customer Payment
                                    </th>
                                    <th
                                        scope="col"
                                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Total
                                    </th>
                                    <th scope="col" className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-0">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {revenue.map((item) => (
                                    <tr key={item.id}>
                                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">{item.id}</td>
                                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">{item.date}</td>

                                        <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                                            {item.company}
                                        </td>
                                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{item.commission}</td>
                                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{item.expenseForProject}</td>
                                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{item.customerPayment}</td>
                                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{item.total}</td>
                                        <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-left text-sm font-medium sm:pr-0">

                                            <div className="flex flex-none items-center gap-x-4">
                                                <Menu as="div" className="relative flex-none">
                                                    <MenuButton className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                                                        <span className="sr-only">Open options</span>
                                                        <EllipsisVerticalIcon aria-hidden="true" className="size-5" />
                                                    </MenuButton>
                                                    <MenuItems
                                                        transition
                                                        className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                                    >
                                                        <MenuItem>
                                                            <Link
                                                                href={`/groupawesome/revenue/edit/${item.id}`}
                                                                className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                                                            >
                                                                Edit<span className="sr-only">, {item.company}</span>
                                                            </Link>
                                                        </MenuItem>
                                                        <MenuItem>
                                                            <Link
                                                                href="#"
                                                                className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                                                            >
                                                                Delete<span className="sr-only">, {item.company}</span>
                                                            </Link>
                                                        </MenuItem>
                                                    </MenuItems>
                                                </Menu>
                                            </div>


                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
