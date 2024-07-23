import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Web Developer", "Front-End Developer", "WordPress Developer", "Shopify Developer", "MERN Stack Developer", "SEO Specialist", "Digital Marketer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Welcome to my portfolio! 🌟 </h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Selim</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am passionate about crafting innovative digital solutions. With expertise in both front-end and back-end technologies, I specialize in:
        </p>
        <ul className="text-base font-bodyFont leading-6 tracking-wide list-disc list-inside">
          <li>Developing robust web applications using MongoDB, Express.js, React.js, and Node.js (MERN stack).</li>
          <li>Designing intuitive user interfaces with HTML, CSS, JavaScript, React, Next.js, and TypeScript.</li>
          <li>Creating seamless CMS experiences with WordPress, Shopify, Craft, and Contentful.</li>
          <li>Implementing effective SEO strategies, managing Google Ads campaigns, and leveraging data analytics for informed decisions.</li>
        </ul>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Explore my portfolio to see how I blend technical proficiency with creative problem-solving to deliver exceptional digital solutions.
        </p>
      </div>
      <Media />
    </div>
  );
};

export default LeftBanner;
