import React from "react";
import { PortableText } from "@portabletext/react";

export default function Timeline({
  roleName,
  companyName,
  startingDate,
  endingDate,
  blockEditor,
}) {
  const blockEditorMapping = blockEditor.map((item) => {
    return item;
  });

  return (
    <>
      <li className="mb-4 ml-8  rounded-md border border-gray-100 bg-white px-4 py-4 shadow-sm shadow-gray-300">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <h3 className="text-lg font-semibold text-gray-900">
          {roleName} |{" "}
          <span className="font-extrabold leading-tighter tracking-tighter bg-clip-text from-pink-500  bg-gradient-to-r text-transparent to-blue-600">
            {`@${companyName}`}
          </span>
        </h3>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400">
          {startingDate} → {endingDate}
        </time>
        <p className="mb-4 text-base font-normal text-gray-500 prose">
          <PortableText
            value={blockEditorMapping}
            components={
              {
                /* optional object of custom components to use */
              }
            }
          />
        </p>
      </li>
    </>
  );
}
