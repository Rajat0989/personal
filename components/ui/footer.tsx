import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-full">
      <nav className="flex justify-center items-center">
        <ul className="flex flex-wrap justify-center gap-1.5">
          <li>
            <Link
              href="/resume"
              className="font-azeret-mono text-primary-color-dark"
            >
              RESUME
            </Link>
          </li>
          <li className="text-primary-color-dark">/</li>
          <li>
            <a
              href="https://www.linkedin.com/in/rajat-chandarana/"
              className="font-azeret-mono text-primary-color-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </a>
          </li>
          <li className="text-primary-color-dark">/</li>
          <li>
            <a
              href="mailto:rajatchandarana09@gmail.com"
              className="font-azeret-mono text-primary-color-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              MAIL
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
