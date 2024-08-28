import React, { useState } from "react";
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
  projectTen,
  projectEleven,
  projectTwelve,
  moreleasmeadow,
  sunriver,
  myTrillo,
  myNatours,
  myNexter,
  earplugs,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";
import ProjectsCard2 from "./ProjectsCard2";

const projectsData = [
  {
    title: "Medical Clinic Website",
    des: "#MongoDB, #Express, #React, #Node.js This website contains five different React apps for various medical services. Here, patients can register and, after logging in, access applications such as lab test requests, sick note requests, appointments, and medication inquiries.",
    src: projectTen,
    websiteLink: "https://southvanmed.com/",
    category: ["Full-Stack"],
    type: "card2",
  },
  {
    title: "Ask Medication App",
    des: "#Full-Stack-Development, #React, #Bootstrap, #Express, #Stripe, #Node.js This app for simple online prescription refills. Skip the wait at the medical clinic and obtain your prescription online. Pick up your medication at any pharmacy in British Columbia.",
    src: projectEleven,
    websiteLink: "https://www.askmedication.com/",
    category: ["Full-Stack"],
    type: "card2",
  },
  {
    title: "Another Clinic Website",
    des: "#MERN-Stack, #FrontEnd, #Backend-Dev This website contains five different React apps for various medical services available in two languages. Here, patients can register and, after logging in, access applications such as lab test requests, sick note requests, appointments, and medication inquiries.",
    src: projectTwelve,
    websiteLink: "https://instoremed.com/",
    category: ["Full-Stack"],
    type: "card2",
  },
  {
    title: "Gatsby.js car sales garage",
    des: "This is a headless wordpress website. Its front-end was built in React environment using Gatsby.js. WordPress was used for its back-end. Also, GraphQL and ACF tools were used.",
    src: projectEight,
    githubLink: "https://github.com/selimensar/gatsby-car-sales-garage",
    websiteLink: "https://gatsbyjs-car-sales-garage.vercel.app/",
    category: ["Full-Stack", "WordPress"],
    type: "card",
  },
  {
    title: "E-commerce Website by Next.js",
    des: "This is a Next.js project with Tailwind CSS bootstrapped with create-next-app.",
    src: projectOne,
    githubLink: "https://github.com/selimensar/sek-next-ecommerce",
    websiteLink: "https://sek-next-ecommerce.vercel.app/",
    category: ["Full-Stack"],
    type: "card",
  },
  {
    title: "Advanced Portfolio Website",
    des: "This website was developed using React, Tailwind.",
    src: projectSeven,
    githubLink: "https://github.com/selimensar/React-Tailwind-Portfolio",
    websiteLink: "https://selim-ensar-koksal.vercel.app/",
    category: ["Front-End"],
    type: "card",
  },
  {
    title: "Booking Web App Front-End",
    des: "This Front-End project was developed using HTML, CSS, JS for a booking web app.",
    src: myTrillo,
    githubLink: "https://github.com/selimensar/my-trillo",
    websiteLink: "https://my-trillo.vercel.app/",
    category: ["Front-End"],
    type: "card",
  },
  {
    title: "Advanced Homepage Design",
    des: "This Front-End project was developed using HTML, CSS, JS for a home sales website.",
    src: myNexter,
    githubLink: "https://github.com/selimensar/my-nexter",
    websiteLink: "https://my-nexter.vercel.app/",
    category: ["Front-End"],
    type: "card",
  },
  {
    title: "Creative Homepage Design",
    des: "This Front-End project was developed using HTML, CSS, JS for a tour website.",
    src: myNatours,
    githubLink: "https://my-natours-alpha.vercel.app/",
    websiteLink: "https://github.com/selimensar/my-natours",
    category: ["Front-End"],
    type: "card",
  },
  {
    title: "Portfolio Website",
    des: "This website was developed using vanilla HTML, CSS, JS to showcase on GitHub.",
    src: projectSix,
    githubLink: "https://github.com/selimensar/selimensar.github.io",
    websiteLink: "https://selimensar.github.io/",
    category: ["Front-End"],
    type: "card",
  },
  {
    title: "Custom-Design Website",
    des: "This website was built on WordPress using HTML, CSS, JS, and PHP. I utilized Elementor and also developed custom page templates.",
    src: moreleasmeadow,
    websiteLink: "https://moraleasmeadow.ca/",
    category: ["WordPress"],
    type: "card2",
  },
  {
    title: "Custom-Built WordPress Website",
    des: "This website was built on WordPress exactly in accordance with the design prepared according to the wishes of the customer through Adobe XD.",
    src: projectFour,
    websiteLink: "https://fabercommunications.com/",
    category: ["WordPress"],
    type: "card2",
  },
  {
    title: "WordPress Website for a Dental Centre",
    des: "This project highlights my ability to combine technical expertise with a focus on user experience, providing a valuable asset for the healthcare industry in the digital space.",
    src: sunriver,
    websiteLink: "https://sunriverdental.ca/",
    category: ["WordPress"],
    type: "card2",
  },
  {
    title: "Custom-Design Shopify Website",
    des: "This website was developed using Liquid, HTML/CSS, JS. And the product images were uploaded to the website after editing by Photoshop.",
    src: projectTwo,
    websiteLink: "https://mobileactive.ca/",
    category: ["Shopify"],
    type: "card2",
  },
  {
    title: "Shop Earplugs",
    des: "This website was developed using Liquid, HTML/CSS, JS with Shopify Habitat Theme.",
    src: earplugs,
    websiteLink: "https://worldsfinestearplugs.com/",
    category: ["Shopify"],
    type: "card2",
  },
  {
    title: "Custom-Design Wordpress Website",
    des: "This website was developed by custom wordpress development using HTML, CSS, JS and PHP.",
    src: projectThree,
    websiteLink: "https://digibib.info/",
    category: ["WordPress"],
    type: "card2",
  },
  {
    title: "Agency Website",
    des: "This is an agency website built on WordPress through custom theme development.",
    src: projectFive,
    websiteLink: "https://www.fairwindcreativestudio.com/",
    category: ["WordPress"],
    type: "card2",
  },
  {
    title: "The website for selling cycling and hiking tours",
    des: "Some parts of this website were developed with custom WordPress theme development and some pages were developed using DIVI Builder.",
    src: projectNine,
    websiteLink: "https://rockymountaincycle.com/",
    category: ["WordPress"],
    type: "card2",
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter(project => project.category.includes(selectedCategory));

  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Check these out on my github" des="My Projects" />
      </div>

      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5">
          {["All", "Full-Stack", "Front-End", "WordPress", "Shopify"].map((category) => (
            <li
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`resumeLi ${
                selectedCategory === category
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 mt-8">
        {filteredProjects.map((project, index) => (
          project.type === "card" ? (
            <ProjectsCard
              key={index}
              title={project.title}
              des={project.des}
              src={project.src}
              githubLink={project.githubLink}
              websiteLink={project.websiteLink}
            />
          ) : (
            <ProjectsCard2
              key={index}
              title={project.title}
              des={project.des}
              src={project.src}
              websiteLink={project.websiteLink}
            />
          )
        ))}
      </div>
    </section>
  );
};

export default Projects;
