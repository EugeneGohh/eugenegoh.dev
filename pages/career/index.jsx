import React from "react";
import { clientConfig } from "../../lib/sanity";
import Link from "next/link";
import CareerCard from "../../components/CareerCard";
import Emoji from "../../components/Emoji";

// Query Companies & Positions Data
const companyDataQuery = `*[_type == "company"]{
  _id, companyName, companyDescription,
  companyUrl, positionName, positionType,
  startingDate, endingDate, workingExperience,
  "companyLogo": companyLogo.asset->url
}`;

export default function Career({ companyDetails }) {
  const companyDetailsData = companyDetails;

  return (
    <>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-2 lg:px-6">
        <Link href="/">
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all my-4"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          </button>
        </Link>
        <div className="mx-auto max-w-screen-sm lg:mb-16 mb-8">
          <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
              {`Wall of Experience`}
            </h1>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              {`These are a collection of code snippets I've used in the past and saved. Some are Serverless Functions, which include set up instructions. Others are anything from random CSS snippets to Node.js scripts.`}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols md:grid-cols-3 sm:grid-cols-2 place-content-around p-2">
        {companyDetailsData.map((companyDetail) => (
          <div key={companyDetail._id}>
            <CareerCard
              companyLogo={companyDetail.companyLogo}
              companyName={companyDetail.companyName}
              companyDescription={companyDetail.companyDescription}
              positionName={companyDetail.positionName}
              positionType={companyDetail.positionType}
              companySite={companyDetail.companyUrl}
              startingDate={companyDetail.startingDate}
              endingDate={companyDetail.endingDate}
            />
          </div>
        ))}
      </div>

      <div className="relative py-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-b mx-12 border-gray-300"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-sm text-gray-500 text-center">
            Wall of Work Images
          </span>
        </div>
      </div>

      <div>
        <p className="text-center font-mono font-semibold">
          To be uploaded <Emoji symbol="🔥" label="Fire" />
        </p>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const companyDetails = await clientConfig.fetch(companyDataQuery);

  return {
    props: {
      companyDetails,
    },
  };
}
