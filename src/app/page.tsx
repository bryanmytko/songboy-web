"use client";

import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="z-10 w-full">
        <div className="top-0 left-0 justify-center pt-8 pb-6 border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <h1 className="block">Songboy Admin:</h1>
          <form action="/api/password-protect" method="post">
            <div className="form-control">
              <div className="">
                {error && (
                  <label className="label">
                    <span className="label-text text-error">{error}</span>
                  </label>
                )}
                <input
                  type="text"
                  name="password"
                  className="p-2 my-4 text-black input input-bordered"
                />
                <button className="block px-4 py-2 rounded btn bg-sky-900">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
