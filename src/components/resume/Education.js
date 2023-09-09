import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2014 - 2019</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Educational Qualification
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title=<a
              href="https://isl.yildiz.edu.tr/en"
              target="_blank"
              rel="noreferrer"
            >
              Business Administration Bachelor
            </a>
            subTitle="YILDIZ TECHNICAL UNIVERSITY (2014 - 2019)"
            result="Istanbul"
            des="Faculty of Economics and Administrative Sciences, Department of Business Administration!"
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title=<a
              href="https://hackyourfuture.be/"
              target="_blank"
              rel="noreferrer"
            >
              Web Development Bootcamp
            </a>
            subTitle="HACK YOUR FUTURE - (01/10/2020 - 01/04/2021)"
            result="Brussels"
            des="This program is divided into 12 modules. The last module is a 6-weeks intensive Final Project where students work on a real project with a real partner. Our training took place at Epitech (Brussels) every Sunday. During the week, students are supported online in their self-study, homework and peer learning."
          />

          <ResumeCard
            title=<a
              href="https://drive.google.com/file/d/1dutiVjOC8DJjJHeEQwOnJDEF8XjVqqDR/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Front-End Development Training Program
            </a>
            subTitle="BRAINNEST CONSULTING - (01/06/2022 - 01/09/2022)"
            result="Online"
            des="Frontend Development Industry Training"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
