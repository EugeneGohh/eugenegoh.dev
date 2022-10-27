import React from "react";
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineLinkedin,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className="flex flex-row">
      <div className="px-3">
        <a
          href="https://twitter.com/_eugenegoh"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineTwitter
            size={30}
            className="no-underline hover:fill-blue-500"
          />
        </a>
      </div>

      <div className="px-3">
        <a
          href="https://github.com/EugeneGohh"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineGithub
            size={30}
            className="no-underline hover:fill-slate-500"
          />
        </a>
      </div>

      <div className="px-3">
        <a
          href="https://www.linkedin.com/in/eugenegohh/"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineLinkedin
            size={30}
            className="no-underline hover:fill-blue-500"
          />
        </a>
      </div>

      <div className="px-3">
        <a
          href="https://www.instagram.com/eugenegoh.dev/"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineInstagram
            size={30}
            className="no-underline hover:fill-pink-600"
          />
        </a>
      </div>

      <div className="px-3">
        <a href="mailto:gzkgt11@gmail.com" target="_blank" rel="noreferrer">
          <AiOutlineMail
            size={30}
            className="no-underline hover:fill-rose-500"
          />
        </a>
      </div>
    </div>
  );
}
