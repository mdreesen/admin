'use client'
import { Switch } from '@headlessui/react';
import { useEffect, useState } from "react";


export default function Page() {

  const [showCustomers, setShowCustomers] = useState(false);
  const [showExpenses, setShowExpenses] = useState(false);
  const [showInvoices, setShowInvoices] = useState(false);
  const [showRevenue, setShowRevenue] = useState(false);
  const [showRevenueChart, setShowRevenueChart] = useState(false);
  const [showCustomersChart, setShowCustomersChart] = useState(false);
  const [showExpensesChart, setShowExpensesChart] = useState(false);
  const [showTeam, setShowTeam] = useState(false);

  const handleChange = () => {
    setShowCustomers((prevIsChecked) => !prevIsChecked);
    setShowExpenses((prevIsChecked) => !prevIsChecked);
    setShowInvoices((prevIsChecked) => !prevIsChecked);
    setShowRevenue((prevIsChecked) => !prevIsChecked);
    setShowRevenueChart((prevIsChecked) => !prevIsChecked);
    setShowCustomersChart((prevIsChecked) => !prevIsChecked);
    setShowExpensesChart((prevIsChecked) => !prevIsChecked);
    setShowTeam((prevIsChecked) => !prevIsChecked);
  };

  // Using this useEffect to update on mount with state
  useEffect(() => {
    setShowCustomers(true);
    setShowExpenses(true);
    setShowInvoices(true)
    setShowRevenue(true)
    setShowRevenueChart(true)
    setShowCustomersChart(true)
    setShowExpensesChart(true)
    setShowTeam(true)
  }, []); // Re-fetch when the 'userFilters' changes

  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base/7 font-semibold text-gray-900">Profile</h3>
        <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">Settings for your profile</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Update information</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">update</dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Show customers</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              <div className="mt-2">
                <Switch
                  defaultChecked={true}
                  checked={showCustomers}
                  onChange={handleChange}
                  className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-gray-200 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-gray-900"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
                  />
                </Switch>
              </div>
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Show expenses</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              <div className="mt-2">
                <Switch
                  defaultChecked={true}
                  checked={showExpenses}
                  onChange={handleChange}
                  className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-gray-200 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-gray-900"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
                  />
                </Switch>
              </div>
            </dd>
          </div>


          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Show invoices</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              <div className="mt-2">
                <Switch
                  defaultChecked={true}
                  checked={showInvoices}
                  onChange={handleChange}
                  className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-gray-200 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-gray-900"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
                  />
                </Switch>
              </div>
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Show revenue</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              <div className="mt-2">
                <Switch
                  defaultChecked={true}
                  checked={showRevenue}
                  onChange={handleChange}
                  className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-gray-200 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-gray-900"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
                  />
                </Switch>
              </div>
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Show revenue chart</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              <div className="mt-2">
                <Switch
                  defaultChecked={true}
                  checked={showRevenueChart}
                  onChange={handleChange}
                  className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-gray-200 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-gray-900"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
                  />
                </Switch>
              </div>
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Show customer chart</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              <div className="mt-2">
                <Switch
                  defaultChecked={true}
                  checked={showCustomersChart}
                  onChange={handleChange}
                  className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-gray-200 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-gray-900"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
                  />
                </Switch>
              </div>
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Show expenses chart</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              <div className="mt-2">
                <Switch
                  defaultChecked={true}
                  checked={showExpensesChart}
                  onChange={handleChange}
                  className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-gray-200 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-gray-900"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
                  />
                </Switch>
              </div>
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Show team</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              <div className="mt-2">
                <Switch
                  defaultChecked={true}
                  checked={showTeam}
                  onChange={handleChange}
                  className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-gray-200 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-gray-900"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
                  />
                </Switch>
              </div>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
