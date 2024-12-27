import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import { team } from '@/actions/team';

export default async function Page() {
  const allTeam = await team();

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">Team</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title, email and role.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Link href={'/groupawesome/team/add'}>
            <button
              type="button"
              className="block rounded-md bg-gray-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900"
            >
              Add team member
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Title
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Status
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Role
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {allTeam.map((item) => {

                  const statusColors = () => {
                    switch (true) {
                      case item.status === 'active':
                        return 'bg-green-50 text-green-700';
                        break
                      case item.status === 'terminated':
                        return 'bg-red-100 text-red-700'
                        break
                      default:
                        return 'bg-yellow-50 text-yellow-700'
                    }
                  }
                  return (
                    <tr key={item.email}>
                      <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">{item.first_name} {item.last_name}</div>
                            <div className="mt-1 text-gray-500">{item.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <div className="text-gray-900">{item.title}</div>
                        <div className="mt-1 text-gray-500">{item.department}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <span className={`inline-flex items-center rounded-md ${statusColors()} px-2 py-1 text-xs font-medium ring-1 ring-inset ring-green-600/20`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{item.role}</td>
                      <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-left text-sm font-medium sm:pr-0">
                        {/* <Link href={`/groupawesome/team/edit/${item.id}`} className="text-indigo-900 hover:text-indigo-900">
                          Edit<span className="sr-only">, {item.name}</span>
                        </Link> */}

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
                                  href={`/groupawesome/team/edit/${item.id}`}
                                  className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                                >
                                  Edit<span className="sr-only">, {item.first_name} {item.last_name}</span>
                                </Link>
                              </MenuItem>
                              <MenuItem>
                                <Link
                                  href="#"
                                  className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                                >
                                  Delete<span className="sr-only">, {item.first_name} {item.last_name}</span>
                                </Link>
                              </MenuItem>
                            </MenuItems>
                          </Menu>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
