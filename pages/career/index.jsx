import React from "react";
import { clientConfig } from "../../lib/sanity";
import Link from "next/link";
import CareerCard from "../../components/CareerCard";
import Emoji from "../../components/Emoji";

// Query For Companies Details
const companyDataQuery = `*[_type == "company"]{
  _id, companyName, companyDescription,
  companyUrl, positionName, positionType,
  startingDate, endingDate, workingExperience,
  "companyLogo": companyLogo.asset->url
}`;

export default function Career({ companyDetails }) {
  const companyDetailsData = companyDetails;

  return (
    <div>
      <div className="flex justify-start px-6 py-12 m-h-full">
        <Link href="/">
          <svg
            className="w-9 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </Link>

        <h1 className="font-sans font-bold text-4xl">Wall of Positions/Experience</h1>
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
        <p className="text-center font-mono font-semibold">To be uploaded <Emoji symbol="🔥" label="Fire" /></p>
      </div>
    </div>
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
