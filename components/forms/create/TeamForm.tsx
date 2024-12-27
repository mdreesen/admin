'use client';
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import Link from 'next/link';

export default function TeamForm() {

  // First Name, Last Name, Email
  const personInfo = (
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

      <div className="sm:col-span-3">
        <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
          First name
        </label>
        <div className="mt-2">
          <input
            id="first-name"
            name="first-name"
            type="text"
            autoComplete="given-name"
            placeholder="First name"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </div>

      <div className="sm:col-span-3">
        <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
          Last name
        </label>
        <div className="mt-2">
          <input
            id="last-name"
            name="last-name"
            type="text"
            autoComplete="family-name"
            placeholder="Last name"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </div>

      <div className="sm:col-span-4">
        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="customer@email.com"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </div>

      <div className="sm:col-span-4">
        <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">
          Title
        </label>
        <div className="mt-2">
          <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Home Owner"
              className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
            />
          </div>
        </div>
      </div>

      <div className="sm:col-span-3">
        <label htmlFor="role" className="block text-sm/6 font-medium text-gray-900">
          Role
        </label>
        <div className="mt-2 grid grid-cols-1">
          <select
            id="role"
            name="role"
            autoComplete="role-name"
            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          >
            <option>member</option>
            <option>admin</option>
          </select>
          <ChevronDownIcon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
          />
        </div>
      </div>
    </div>
  );

  const address = (
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-3">
        <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
          Country
        </label>
        <div className="mt-2 grid grid-cols-1">
          <select
            id="country"
            name="country"
            autoComplete="country-name"
            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          >
            <option>United States</option>
            <option>Canada</option>
          </select>
          <ChevronDownIcon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
          />
        </div>
      </div>

      <div className="col-span-full">
        <label htmlFor="street-address" className="block text-sm/6 font-medium text-gray-900">
          Street address
        </label>
        <div className="mt-2">
          <input
            id="street-address"
            name="street-address"
            type="text"
            autoComplete="street-address"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </div>

      <div className="sm:col-span-2 sm:col-start-1">
        <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">
          City
        </label>
        <div className="mt-2">
          <input
            id="city"
            name="city"
            type="text"
            autoComplete="address-level2"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="region" className="block text-sm/6 font-medium text-gray-900">
          State / Province
        </label>
        <div className="mt-2">
          <input
            id="region"
            name="region"
            type="text"
            autoComplete="address-level1"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="postal-code" className="block text-sm/6 font-medium text-gray-900">
          ZIP / Postal code
        </label>
        <div className="mt-2">
          <input
            id="postal-code"
            name="postal-code"
            type="text"
            autoComplete="postal-code"
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
          <h2 className="text-base/7 font-semibold text-gray-900">Team member information</h2>
          <p className="mt-1 text-sm/6 text-gray-600">Name and details of team member.</p>

          {personInfo}
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">Address</h2>
          <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where team member receives mail.</p>

          {address}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link href={'/groupawesome/team'}>
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
