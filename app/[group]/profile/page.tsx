import UseProfileSwitches from '@/components/switches/UseProfileSwitches';
import { group } from '@/actions/group';

export default async function Page() {
  const useGroup = await group();

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

          <UseProfileSwitches data={useGroup.settings} />

        </dl>
      </div>
    </div>
  )
}
