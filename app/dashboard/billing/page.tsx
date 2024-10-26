import React from "react";

function billing() {
  return (
    <div className=" max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto h-dvh">
      <div>
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Pricing
          </h2>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            Whatever your status, our offers evolve according to your needs.
          </p>
          <p className="pt-2">
            <strong>
              No Payment Method is attached. This is for portfolio purpose.
            </strong>
          </p>
        </div>
      </div>

      <div className="mt-12  lg:flex items-center  justify-center gap-6 md:grid md:grid-cols-2 sm:grid-cols-1">
        {/* <div className="mt-12  flex items-center  justify-center gap-6 "> */}
        <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-neutral-800">
          {/* <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">
            Free
          </h4> */}
          <span className="mt-7 font-bold text-5xl text-gray-800 dark:text-neutral-200">
            Free
          </span>
          <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
            Forever free
          </p>

          <ul className="mt-7 space-y-2.5 text-sm">
            <li className="flex gap-x-2">
              <svg
                className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-800 dark:text-neutral-400">
                10,000 words/month
              </span>
            </li>

            <li className="flex gap-x-2">
              <svg
                className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-800 dark:text-neutral-400">
                50+ Content Templates
              </span>
            </li>

            <li className="flex gap-x-2">
              <svg
                className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-800 dark:text-neutral-400">
                Unlimited Download & Copy
              </span>
            </li>
            <li className="flex gap-x-2">
              <svg
                className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-800 dark:text-neutral-400">
                1 Month of History
              </span>
            </li>
          </ul>

          <a
            className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            href="#"
          >
            Active Plan
          </a>
        </div>
        {/* <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 m-12 dark:border-neutral-800"></div> */}
        <div className="flex flex-col border-2 border-blue-600 text-center shadow-xl rounded-xl p-8 dark:border-blue-700">
          <p className="mb-3">
            {/* <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-white">
              Most popular
            </span> */}
          </p>
          <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">
            Monthly
          </h4>
          <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-neutral-200">
            <span className="font-bold text-2xl ">$</span>
            9.99
          </span>
          <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
            All the basics for starting a new business
          </p>

          <ul className="mt-7 space-y-2.5 text-sm">
            <li className="flex gap-x-2">
              <svg
                className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-800 dark:text-neutral-400">
                1,00,000 words/month
              </span>
            </li>

            <li className="flex gap-x-2">
              <svg
                className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-800 dark:text-neutral-400">
                50+ Template Access
              </span>
            </li>

            <li className="flex gap-x-2">
              <svg
                className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-800 dark:text-neutral-400">
                Unlimited Download & Copy
              </span>
            </li>
            <li className="flex gap-x-2">
              <svg
                className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-800 dark:text-neutral-400">
                1 Year of History
              </span>
            </li>
          </ul>

          <a
            className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

export default billing;
