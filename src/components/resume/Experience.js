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
          <p className="text-sm text-designColor tracking-[4px]">From 2018 to 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-4/5 h-[2000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">

        <ResumeCard
            title="Frontend Developer"
            subTitle=<a
              href="https://generalinternet.ca/"
              target="_blank"
              rel="noreferrer"
            >
              General Internet | Full-Time | (2024/10 - Present)
            </a>
            result="Coquitlam / Canada"
            des="I'm creating responsive, user-friendly web interfaces using modern frameworks and technologies like HTML, CSS, JavaScript, and React. Also I'm doing WordPress and Shopify Development."
          />
          
          <ResumeCard
            title="Full Stack Web Developer"
            subTitle=<a
              href="https://fairwindcreative.com/our-roots/"
              target="_blank"
              rel="noreferrer"
            >
              Fairwind Creative | Contractor | (2023/04 - Present)
            </a>
            result="Vancouver / Canada"
            des="I am dedicated to crafting engaging and visually appealing user interfaces for web applications using a diverse technology stack. I translate design concepts into fully functional web experiences. Leveraging my expertise in HTML, CSS, JavaScript, React, Next.js, PHP, and Node.js. Additionally, I develop and maintain WordPress and Shopify sites, ensuring robust performance and scalability."
          />
          <ResumeCard
            title="Full Stack Web Developer"
            subTitle=<a
              href="https://southvanmed.com/"
              target="_blank"
              rel="noreferrer"
            >
              South Vancouver Medical Clinic | Full-Time | (2024/03/01 - 2024/07/15)
            </a>
            result="Vancouver / Canada"
            des="I'm actively engaged in both backend and frontend development at this company, where I create dynamic websites and applications using MongoDB, Express.js, React.js, and Node.js. In addition, I develop custom Chrome extensions to solve specific problems as needed, and I manipulate APIs to ensure seamless integration and functionality. I develop and deploy custom full-stack applications on AWS. I use AWS CodeCommit and Git version control for facilitating efficient collaboration, code review, and continuous integration."
          />
          <ResumeCard
            title="Web Developer & Technical SEO Specialist"
            subTitle=<a href="https://l8p.ca/" target="_blank" rel="noreferrer">
              L8P DIGITAL MARKETING | Contractor | (2023/10 - 2024/04)
            </a>
            result="Vancouver / Canada"
            des="In this agency, I do the necessary web development work according to the needs of the customers. I also play an active role in Technical SEO improvements from a web developer perspective."
          />
          <ResumeCard
            title="Frontend Developer"
            subTitle=<a
              href="https://mobileactive.ca/"
              target="_blank"
              rel="noreferrer"
            >
              Mobile Active Technologies | Full-Time | (2022/08 - 2022/10)
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
