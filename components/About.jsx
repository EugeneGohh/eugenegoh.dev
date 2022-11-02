import React from "react";
import Emoji from "./Emoji";
import { RoughNotation } from "react-rough-notation";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <div className="flex justify-start">
        <h1 className="font-sans font-bold text-4xl">Eugene Goh Yu Hin</h1>

        <svg
          className="w-6 h-6 m-2.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>

      <div className="flex flex-row-reverse py-5">
        <div>
          <Link href="/posts" className="px-2 decoration-sky-500/30">
            <RoughNotation
              type="highlight"
              strokeWidth={0.1}
              show="true"
              color="#b9dcf2"
            >
              Public Content{" "}
            </RoughNotation>
          </Link>
        </div>

        <div>
          <Link href="/career" className="px-2 decoration-sky-500/30">
            <RoughNotation
              type="highlight"
              strokeWidth={0.1}
              show="true"
              color="#f8acff"
            >
              Experience Journey
            </RoughNotation>
          </Link>
        </div>

        <div>
          <Link href="/" className="px-2 decoration-sky-500/30">
            <RoughNotation
              type="highlight"
              strokeWidth={0.1}
              show="true"
              color="#ebf4f5"
            >
              About Me
            </RoughNotation>
          </Link>
        </div>
      </div>

      <div className="flex flex-col max-w-fit py-5">
        <p className="font-mono text-lg">
          Hey! I'm Eugene Goh, a 18 y/o Software Engineer based in Kuala Lumpur{" "}
          <Emoji symbol="🇲🇾" label="MY" />, specializing in JavaScript, GraphQL,
          and Web3 technologies. Welcome to my digital garden where I share what
          I'm learning about shipping impactful products, becoming a better
          engineer and growing a career in tech.
        </p>
      </div>

      <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </div>
  );
}
