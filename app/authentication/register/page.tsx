"use client";
import Image from "next/image";
import Link from "next/link";
import { register } from "@/actions/register";
import { removeSpacesAndCaps} from '@/lib/formatters';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const [error, setError] = useState<string>();

  const handleSubmit = async (formData: FormData) => {
    const r = await register({
      group_name: formData.get("team_name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirm_password: formData.get("confirm_password"),
    });

    // ref?.current?.reset();
    if (r?.error) {
      setError(r.error);
      return;
    }
    else {
      console.log()
      return router.push(`/${removeSpacesAndCaps(formData.get("team_name") as string)}`);
    }
  };

  return (
    <>
      <div className="flex h-[100vh] flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-[50%]">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-8 text-3xl/9 font-bold tracking-tight text-gray-900">Welcome to RADMIN</h2>
              <h2 className="mt-8 text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>

            </div>

            <div className="mt-10">
              <div>
              <form method="POST" action={handleSubmit} className="space-y-6">
              <div>
                    <label htmlFor="team_name" className="block text-sm/6 font-medium text-gray-900">
                      Team name
                    </label>
                    <div className="mt-2">
                      <input
                        id="team_name"
                        name="team_name"
                        type="team_name"
                        required
                        autoComplete="team_name"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-900 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-900 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-900 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="confirm_password" className="block text-sm/6 font-medium text-gray-900">
                      Confirm password
                    </label>
                    <div className="mt-2">
                      <input
                        id="confirm_password"
                        name="confirm_password"
                        type="password"
                        required
                        autoComplete="current-confirm_password"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-900 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      <div className="flex h-6 shrink-0 items-center">
                        <div className="group grid size-4 grid-cols-1">
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-900 checked:bg-indigo-900 indeterminate:border-indigo-900 indeterminate:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                          />
                          <svg
                            fill="none"
                            viewBox="0 0 14 14"
                            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                          >
                            <path
                              d="M3 8L6 11L11 3.5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-[:checked]:opacity-100"
                            />
                            <path
                              d="M3 7H11"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-[:indeterminate]:opacity-100"
                            />
                          </svg>
                        </div>
                      </div>
                      <label htmlFor="remember-me" className="block text-sm/6 text-gray-900">
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm/6">
                      <Link href="#" className="font-semibold text-gray-900 hover:text-gray-500">
                        Forgot password?
                      </Link>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                    >
                      Sign up
                    </button>
                  </div>


                  <div className="text-red-500">
                  {error}

                  </div>

                  <div className="text-sm/6">
                    <Link href="/" className="font-semibold text-gray-900 hover:text-gray-500">
                      Need to log in?
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <Image
            alt="Homepage background image"
            width={100}
            height={100}
            src={'/assets/home_3.jpg'}
            className="absolute inset-0 size-full object-cover"
          />
        </div>
      </div>
    </>
  )
}
