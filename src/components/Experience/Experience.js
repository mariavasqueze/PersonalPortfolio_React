import "./experience.css";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "animate.css";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import imageSolo from "../../assets/img/sologenic.jpeg";
import idoLaunchpad from "../../assets/img/ido-launchpad.png";
import freelancer from "../../assets/img/freelancer.jpeg";
import marketing from "../../assets/img/marketing.png";
import xls30 from "../../assets/img/xls30.png";
import ShiftMain from "../../assets/img/shift-main.png";
import Typescript from "../../assets/img/typescript.png";
import ReactImg from "../../assets/img/react.png";
import Redux from "../../assets/img/redux.svg";
import Next from "../../assets/img/next.png";
import JavaScript from "../../assets/img/javascript.png";
import Vite from "../../assets/img/vite-logo.svg";

const EXPERIENCES = [
  {
    position: "Intermediate Web Developer",
    company: "Shift",
    link: "https://shift.com/",
    techs: [Typescript, JavaScript, ReactImg, Redux, Next, Vite],
    date: "March 2024 - Present",
    summary:
      "Building the next generation power browser for productivity and multi-tasking.",
    media: {
      img: ShiftMain,
      alt: "Shift image",
      link: "https://shift.com/",
    },
    // projectLinks: [
    //   {
    //     name: "Download Shift",
    //     link: "https://shift.com",
    //   },
    // ],
  },
  {
    position: "Front End Developer",
    company: "Sologenic",
    link: "https://sologenic.com/",
    companyImage: imageSolo,
    techs: [Typescript, JavaScript, ReactImg, Redux, Next],
    date: "April 2023 - March 2024",
    summary:
      "Continuously integrating new tools and features into the company websites by leveraging APIs and seamless front-end to back-end connections, facilitating fresh redesigns and enhancing user functionality.",
    media: {
      img: xls30,
      alt: "xls30 image",
      link: "https://sologenic.com/trade",
    },
    projectLinks: [
      {
        name: "Airdops",
        link: "https://sologenic.com/airdrops",
      },
      {
        name: "Third Party Integrations",
        link: "https://sologenic.org/buy-crypto?network=mainnet",
      },
      { name: "Static Pages", link: "https://www.sologenic.com/" },
    ],
  },
  {
    position: "Front End Dev. Intern",
    company: "Sologenic",
    link: "https://sologenic.com/",
    companyImage: imageSolo,
    techs: [Typescript, JavaScript, ReactImg, Redux, Next],
    date: "Jan 2023 - April 2023",
    summary:
      "Developed the Front End UI and functionality of a new Initial Decentralized Offering creation platform using Next.js, enabling users to seamlessly launch crypto projects and tokens.",
    media: {
      img: idoLaunchpad,
      alt: "ido-launchpad",
      link: "https://sologenic.org/ido-launchpad",
    },
    projectLinks: [
      {
        name: "IDO Launchpad",
        link: "https://sologenic.org/ido-launchpad",
      },
      {
        name: "Static Pages",
        link: "https://sologenic.org/sologenic-sdk",
      },
    ],
  },
  {
    position: "Web Developer",
    company: "Freelance Upwork",
    link: "",

    companyImage: freelancer,
    date: "Jan 2021 - Dec 2021",
    summary:
      "Collaborated directly with clients to architect and refine e-Commerce platforms, leveraging Shopify to enhance store functionality and user experience through customizable components. ● Engineered seamless extensions and application integrations for e-Commerce websites, catalyzing sales growth and conversion rates through strategic enhancements...",
    media: {
      img: marketing,
      alt: "digital marketing background",
      link: "",
    },
  },
];

function Experience() {
  const experienceCardsRef = useRef(null);

  useEffect(() => {
    const container = experienceCardsRef.current;

    let isMouseDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener("mousedown", (e) => {
      isMouseDown = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });

    container.addEventListener("mouseleave", () => {
      isMouseDown = false;
    });

    container.addEventListener("mouseup", () => {
      isMouseDown = false;
    });

    container.addEventListener("mousemove", (e) => {
      if (!isMouseDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2; // Adjust the speed of scrolling by multiplying the difference

      container.scrollLeft = scrollLeft - walk;
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      id="experience"
      className="exp-wrapper"
    >
      <h4 className="experience-title animate__animated animate__fadeInDown">
        Experience
      </h4>
      <div
        ref={experienceCardsRef}
        className="experience-cards"
        id="experienceCards"
      >
        <ExperienceCard experience={EXPERIENCES[0]} toLink={true} />
        <ExperienceCard experience={EXPERIENCES[1]} />
        <ExperienceCard experience={EXPERIENCES[2]} />
        <ExperienceCard experience={EXPERIENCES[3]} />
      </div>
    </motion.div>
  );
}

export default Experience;
