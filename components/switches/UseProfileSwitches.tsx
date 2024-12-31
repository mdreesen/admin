'use client'
import { Switch } from '@headlessui/react';
import { useState } from "react";

interface CheckboxOption {
    id: string;
    label: string;
}

export default function Page({ data }: any) {
    console.log(data)

    const options: CheckboxOption[] = [
        { id: 'option1', label: 'Show customers' },
        { id: 'option2', label: 'Show expenses' },
        { id: 'option3', label: 'Show invoices' },
        { id: 'option4', label: 'Show revenue' },
        { id: 'option5', label: 'Show revenue chart' },
        { id: 'option6', label: 'Show customer chart' },
        { id: 'option7', label: 'Show expenses chart' },
        { id: 'option8', label: 'Show team' },
    ];

    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const handleCheckboxChange = async (id: string) => {

        setSelectedOptions((prevSelected) => {
            if (prevSelected.includes(id)) {
                return prevSelected.filter((optionId) => optionId !== id);
            } else {
                return [...prevSelected, id];
            }
        });
    };

    const switchGroup = options.map((item, index) => (
        <div key={`${item.label}-${index}`} className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Show customers</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                <div className="mt-2">
                    <Switch
                        checked={selectedOptions.includes(item.id)}
                        onChange={() => handleCheckboxChange(item.id)}
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
    ))


    return (
        <form>
            {switchGroup}
        </form>
    )
}
