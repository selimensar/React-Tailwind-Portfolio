import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2018</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-4/5 h-[1050px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Web Developer"
            subTitle=<a
              href="https://www.fairwindcreativestudio.com/our-roots/"
              target="_blank"
              rel="noreferrer"
            >
              Fairwind Creative | Contractor | (2023/04 - Present)
            </a>
            result="Vancouver / Canada"
            des="In close collaboration with the design team, I implemented captivating user interfaces using HTML, CSS, and JavaScript while adhering to industry best practices for code organization, maintainability, and performance optimization."
          />
          <ResumeCard
            title="Frontend Developer"
            subTitle=<a
              href="https://mobileactive.ca/"
              target="_blank"
              rel="noreferrer"
            >
              Mobile Active Technologies | Part-Time | (2022/08 - Present)
            </a>
            result="Vancouver / Canada"
            des="This is a wholesale company that sells all kinds of phone parts. As a Front-End developer, I'm doing custom design and development to increase the user experience for the e-commerce website."
          />
          <ResumeCard
            title="Volunteer Web Developer"
            subTitle=<a
              href="https://thepowerofplay.ca/our-team/"
              target="_blank"
              rel="noreferrer"
            >
              The Power of Play (Non-Profit) | (2022/10 - Present)
            </a>
            result="Vancouver / Canada"
            des="This is a non-profit organization that builds playgrounds for children who don't have playgrounds around the world. Here I am actively doing wordpress development to receive more donations."
          />
          <ResumeCard
            title="Web Developer"
            subTitle=<a
              href="https://maksvzw.org/grafisch-bureau/"
              target="_blank"
              rel="noreferrer"
            >
              Maks vzw Graphic Design Agency | Full-Time | (2021/04 - 2022/08)
            </a>
            result="Brussels / Belgium"
            des="As a Web Developer at Maks vzw Graphic Design Agency, I had the pleasure of collaborating with a talented team of graphic designers to create visually stunning websites. My role was crucial in bringing their designs to life, and I took great pride in crafting engaging online experiences for our clients."
          />
          <ResumeCard
            title="Digital Marketing Specialist"
            subTitle=<a
              href="https://www.boostroas.com/"
              target="_blank"
              rel="noreferrer"
            >
              BoostRoas Agency | Full-Time | (2018/06 - 2019/12)
            </a>
            result="Istanbul / Turkey"
            des="I started my career in this agency that advises digital marketing and specialized in SEO, Google Ads, Social Ads, Web Analytics, and UI-UX. I have professionally experienced all digital marketing channels in this agency. We provided Digital Marketing consultancy to medium and large-scale companies in Turkey and worldwide."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
