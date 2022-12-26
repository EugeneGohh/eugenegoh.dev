import React from "react";
import {
  FiTwitter,
  FiGithub,
  FiInstagram,
  FiMail,
  FiLinkedin,
} from "react-icons/fi";

export default function Footer() {
  return (
    <>
      <div className="flex justify-center my-4">
        <p className="text-center">
          {`If you would like to get in touch, feel free to reach out to me via
          these available channels.`}
        </p>
      </div>

      <div className="flex justify-center my-4">
        <div className="px-4">
          <a
            href="https://twitter.com/_eugenegoh"
            target="_blank"
            rel="noreferrer"
          >
            <FiTwitter size={30} className="no-underline hover:fill-blue-500" />
          </a>
        </div>

        <div className="px-4">
          <a
            href="https://github.com/EugeneGohh"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub size={30} className="no-underline hover:fill-slate-500" />
          </a>
        </div>

        <div className="px-4">
          <a
            href="https://www.linkedin.com/in/eugenegohh/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin
              size={30}
              className="no-underline hover:fill-blue-500"
            />
          </a>
        </div>

        <div className="px-4">
          <a
            href="https://www.instagram.com/eugenegoh.dev/"
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram
              size={30}
              className="no-underline hover:fill-pink-600"
            />
          </a>
        </div>

        <div className="px-4">
          <a href="mailto:gzkgt11@gmail.com" target="_blank" rel="noreferrer">
            <FiMail size={30} className="no-underline hover:fill-rose-500" />
          </a>
        </div>
      </div>
    </>
  );
}
