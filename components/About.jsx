/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Emoji from "./Emoji";
import { RoughNotation } from "react-rough-notation";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1 className="font-sans font-bold text-4xl">Eugene Goh Yu Hin</h1>

      <div className="flex flex-row-reverse py-5">
        <div>
          <Link href="/posts" className="px-2 decoration-sky-500/30">
            <RoughNotation
              type="highlight"
              strokeWidth={0.1}
              show="true"
              color="#b9dcf2"
            >
              Blog Posts
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
              Career Journey
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
          and Web3 technologies. On my free time, I study Computer Science
          independently while also sharing what I've learned on Twitter!
        </p>
      </div>

      <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </div>
  );
}
