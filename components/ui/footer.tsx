import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full">
      <nav className="flex justify-center items-center">
        <ul className="flex flex-wrap justify-center gap-1.5">
          <li>
            <a
              href="https://www.linkedin.com/in/rajat-chandarana/"
              className="commit-mono text-primary-color link-underline link-underline-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </a>
          </li>

          <li className="text-primary-color">/</li>
          <li>
            <a
              href="https://twitter.com/rajatchandarana"
              className="commit-mono text-primary-color link-underline link-underline-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              TWITTER
            </a>
          </li>
          <li className="text-primary-color">/</li>
          <li>
            <a
              href="mailto:therobkan@gmail.com"
              className="commit-mono text-primary-color link-underline link-underline-hover"
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
