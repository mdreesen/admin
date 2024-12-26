import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import { formatCurrency } from '@/lib/formatCurrency';
import Link from 'next/link';

const statuses = {
  Complete: 'text-green-700 bg-green-50 ring-green-600/20',
  'In progress': 'text-gray-600 bg-gray-50 ring-gray-500/10',
  Archived: 'text-yellow-800 bg-yellow-50 ring-yellow-600/20',
} as any;
const projects = [
  {
    id: 1,
    name: 'Employees',
    value: 15000,
    createdBy: 'Leslie Alexander',
    created: 'March 17, 2023',
    dueDateTime: '2023-03-17T00:00Z',
  },
  {
    id: 2,
    name: 'Materials',
    value: 8000,
    createdBy: 'Leslie Alexander',
    created: 'May 5, 2023',
    dueDateTime: '2023-05-05T00:00Z',
  },
  {
    id: 3,
    name: 'Vehicles',
    value: 5000,
    createdBy: 'Courtney Henry',
    created: 'May 25, 2023',
    dueDateTime: '2023-05-25T00:00Z',
  },
  {
    id: 4,
    name: 'Rent',
    value: 5120,
    createdBy: 'Leonard Krasner',
    created: 'June 7, 2023',
    dueDateTime: '2023-06-07T00:00Z',
  },
  {
    id: 5,
    name: 'Bills',
    value: 1000,
    createdBy: 'Courtney Henry',
    created: 'June 10, 2023',
    dueDateTime: '2023-06-10T00:00Z',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Page() {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {projects.map((project) => (
        <li key={project.id} className="flex items-center justify-between gap-x-6 py-5">
          <div className="min-w-0">
            <div className="flex items-start gap-x-3">
              <p className="text-sm/6 font-semibold text-gray-900">{project.name}</p>
              <p
                className={classNames(
                  statuses[project.value],
                  'mt-0.5 whitespace-nowrap rounded-md px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset',
                )}
              >
                {formatCurrency(project.value)}
              </p>
            </div>
            <div className="mt-1 flex items-center gap-x-2 text-xs/5 text-gray-500">
              <p className="whitespace-nowrap">
                Made on <time dateTime={project.dueDateTime}>{project.created}</time>
              </p>
              <svg viewBox="0 0 2 2" className="size-0.5 fill-current">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <p className="truncate">Created by {project.createdBy}</p>
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
                    Edit<span className="sr-only">, {project.name}</span>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    href="#"
                    className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                  >
                    Delete<span className="sr-only">, {project.name}</span>
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
