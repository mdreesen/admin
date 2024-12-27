import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid';
import { invoices } from '@/actions/invoices';
import Link from 'next/link';

const statuses = {
  Paid: 'text-green-700 bg-green-50 ring-green-600/20',
  Active: 'text-yellow-600 bg-yellow-50 ring-yellow-500/10',
  Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
  Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
} as any

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default async function Page() {
  const allInvoices = await invoices()

  return (
    <>
      <div className='flex justify-end my-4'>
        <Link href={`/groupawesome/invoices/add`}>
          <button
            type="button"
            className="block rounded-md bg-gray-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900"
          >
            Add invoice
          </button>
        </Link>
      </div>

      <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
        {allInvoices.map((item) => (
          <li key={item.id} className="overflow-hidden rounded-xl border border-gray-200">
            <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
              <div className="text-sm/6 font-medium text-gray-900">{item.name}</div>
              <Menu as="div" className="relative ml-auto">
                <MenuButton className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Open options</span>
                  <EllipsisHorizontalIcon aria-hidden="true" className="size-5" />
                </MenuButton>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <MenuItem>
                    <Link
                      href={`/groupawesome/invoices/details/${item.id}`}
                      className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                    >
                      Details<span className="sr-only">, {item.name}</span>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      href={`/groupawesome/customers/edit/${item.id}`}
                      className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                    >
                      Edit<span className="sr-only">, {item.name}</span>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                    >
                      Delete<span className="sr-only">, {item.name}</span>
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
            <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm/6">
              <div className="flex justify-between gap-x-4 py-3">
                <dt className="text-gray-500">Last invoice</dt>
                <dd className="text-gray-700">
                  <time dateTime={item.lastInvoice.dateTime}>{item.lastInvoice.date}</time>
                </dd>
              </div>
              <div className="flex justify-between gap-x-4 py-3">
                <dt className="text-gray-500">Amount</dt>
                <dd className="flex items-start gap-x-2">
                  <div className="font-medium text-gray-900">{item.lastInvoice.total}</div>
                  <div
                    className={classNames(
                      statuses[item.lastInvoice.status],
                      'rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset',
                    )}
                  >
                    {item.lastInvoice.status}
                  </div>
                </dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
    </>
  )
}
