import React from "react";
import Image from "next/image";

export default function CareerCard({
  companyLogo,
  companyName,
  companyDescription,
  companySite,
  positionName,
  positionType,
  startingDate,
  endingDate,
}) {
  return (
    <div className="flex flex-row flex-wrap justify-center m-2">
      <div className="p-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <Image
          className="my-2"
          src={companyLogo}
          height={200}
          width={350}
          draggable={false}
          alt=""
        />

        <a href="#">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {companyName} | <span className="font-mono text-base">{positionName}</span>
          </h5>
        </a>

        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
          {positionType}
        </span>

        <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
          {startingDate}
        </span>

        <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
          {endingDate}
        </span>

        <p className="my-3 font-normal text-gray-700 dark:text-gray-400">
          {companyDescription}
        </p>
        <a
          href={companySite}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Visit {companyName}
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
