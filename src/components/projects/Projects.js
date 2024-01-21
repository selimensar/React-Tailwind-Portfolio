import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
  projectSeven,
  projectEight,
  projectNine,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";
import ProjectsCard2 from "./ProjectsCard2";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Check these out on my github" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Gatsby.js car sales garage"
          des="This is a headless wordpress website. Its front-end was built in React environment using Gatsby.js. WordPress was used for its back-end. Also, GraphQL and ACF tools were used."
          src={projectEight}
          githubLink="https://github.com/selimensar/gatsby-car-sales-garage"
          websiteLink="https://gatsby-v5-test.vercel.app/"
        />
        <ProjectsCard
          title="E-commerce Website by Next.js"
          des="This is a Next.js project with Tailwind CSS bootstrapped with create-next-app. "
          src={projectOne}
          githubLink="https://github.com/selimensar/sek-next-ecommerce"
          websiteLink="https://sek-next-ecommerce.vercel.app/"
        />
        <ProjectsCard
          title="Portfolio Website"
          des="This website was developed using vanilla HTML, CSS, JS to showcase on GitHub."
          src={projectSix}
          githubLink="https://github.com/selimensar/selimensar.github.io"
          websiteLink="https://selimensar.github.io/"
        />
        <ProjectsCard
          title="Advanced Portfolio Website"
          des="This website was developed using React, Tailwind."
          src={projectSeven}
          githubLink="https://github.com/selimensar/React-Tailwind-Portfolio"
          websiteLink="https://selim-ensar-koksal.vercel.app/"
        />
        <ProjectsCard2
          title="Custom-Built WordPress Website"
          des="This website was built on WordPress exactly in accordance with the design prepared according to the wishes of the customer through Adobe XD."
          src={projectFour}
          websiteLink="https://fabercommunications.com/"
        />
        <ProjectsCard2
          title="Custom-Design Shopify Website"
          des=" This website was developed using Liquid, HTML/CSS, JS. And the product images were uploaded to the website after editing by Photoshop. "
          src={projectTwo}
          websiteLink="https://mobileactive.ca/"
        />
        <ProjectsCard2
          title="Custom-Design Wordpress Website"
          des="This website was developed by custom wordpress development using HTML, CSS, JS and PHP."
          src={projectThree}
          websiteLink="https://digibib.info/"
        />
        <ProjectsCard2
          title="Agency Website"
          des="This is an agency website built on WordPress through custom theme development."
          src={projectFive}
          websiteLink="https://www.fairwindcreativestudio.com/"
        />
        <ProjectsCard2
          title="The website for selling cycling and hiking tours"
          des="Some parts of this website were developed with custom WordPress theme development and some pages were developed using DIVI Builder. "
          src={projectNine}
          websiteLink="https://rockymountaincycle.com/"
        />
      </div>
    </section>
  );
};

export default Projects;
