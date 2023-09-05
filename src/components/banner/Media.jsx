import React from "react";
import { FaLinkedinIn, FaReact, FaNodeJs, FaHtml5 } from "react-icons/fa";
import { SiGithub, SiGmail, SiCss3 } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a
              href="https://github.com/selimensar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="mailto:selimensarkoksal@gmail.com">
              <SiGmail />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://www.linkedin.com/in/selim-ensar-koksal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST WEB STACK
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaHtml5 title="HTML5" />
          </span>
          <span className="bannerIcon">
            <SiCss3 title="CSS3" />
          </span>
          <span className="bannerIcon">
            <FaReact title="React" />
          </span>
          <span className="bannerIcon">
            <FaNodeJs title="JavaScript - Nodejs" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
