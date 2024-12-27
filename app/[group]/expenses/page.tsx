import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import { formatCurrency } from '@/lib/formatCurrency';
import Link from 'next/link';
import { expenses } from '@/actions/expenses';

const statuses = {
  Complete: 'text-green-700 bg-green-50 ring-green-600/20',
  'In progress': 'text-gray-600 bg-gray-50 ring-gray-500/10',
  Archived: 'text-yellow-800 bg-yellow-50 ring-yellow-600/20',
} as any;


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default async function Page() {
  const allExpenses = await expenses();

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {allExpenses.map((item) => (
        <li key={item.id} className="flex items-center justify-between gap-x-6 py-5">
          <div className="min-w-0">
            <div className="flex items-start gap-x-3">
              <p className="text-sm/6 font-semibold text-gray-900">{item.name}</p>
              <p
                className={classNames(
                  statuses[item.value],
                  'mt-0.5 whitespace-nowrap rounded-md px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset',
                )}
              >
                {formatCurrency(item.value)}
              </p>
            </div>
            <div className="mt-1 flex items-center gap-x-2 text-xs/5 text-gray-500">
              <p className="whitespace-nowrap">
                Made on <time dateTime={item.created}>{item.created}</time>
              </p>
              <svg viewBox="0 0 2 2" className="size-0.5 fill-current">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <p className="truncate">Created by {item.createdBy}</p>
            </div>
          </div>
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
                    href="/groupawesome/expenses/edit"
                    className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                  >
                    Edit<span className="sr-only">, {item.name}</span>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    href="#"
                    className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                  >
                    Delete<span className="sr-only">, {item.name}</span>
                  </Link>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </li>
      ))}
    </ul>
  )
}
