import "./projects.css";
import projImg2 from "../../assets/img/project2-nasa-img.png";
import comingSoon from "../../assets/img/coming-soon.jpeg";
import projImg4 from "../../assets/img/homePage.png";
import happyHour from "../../assets/videos/happy-hour.mp4";
import clothingStoreVideo from "../../assets/videos//clothingStoreVideo.mov";
import clothingStoreSnap from "../../assets/img/clothingStoreSnap.png";
import mealsAppVideo from "../../assets/videos/mealsFinals.mp4";
import mealsToGoSnap from "../../assets/img/mealsToGoSnap.png";
import * as React from "react";
import { Modal } from "@mui/material";
import { motion } from "framer-motion";
import "animate.css";
import {
  AiOutlineClose,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import Bottom from "../Bottom/Bottom";

const projects = [
  {
    title: "React Web App - Happy Hour Locator",
    description:
      "This is a React Web App team project. It lets all users find the happy hours of restaurants and bars in Vancouver using the Google Maps API. Authorization and database are handled with Firebase. The web app has different user and location sites and functionalities",
    desc2: "Tech stack: React, Firebase, Bootstrap, HTML, CSS",
    imageUrl: projImg4,
    demo: "https://www.happyhourlocator.ca/",
    code: "https://github.com/mariavasqueze/happy-hour-locator",
    video: happyHour,
  },
  {
    title: "React Native App - Meals To Go App",
    description:
      "React Native App that uses firebase for authentication and function handling to find restaurant in any city using Google Maps API, add favorites and order a min dish from the restaurant, handling the payment with Stripe. Made for both, Android and iOS.",
    desc2: "Tech stack: React Native, Javascript, Firebase, Cloud, Stripe",
    imageUrl: mealsToGoSnap,
    demo: null,
    code: "https://github.com/mariavasqueze/MealsToGo_React_Native",
    video: mealsAppVideo,
  },
  {
    title: "React / Redux Online Store",
    description:
      "React-based online clothing store. User authentication and the product database is in Firebase. The checkout page uses Stripe to complete payments. All actions of the page are processed with Redux, to see this, check the console when using the page.",
    desc2: "Tech stack: JavaScript, React, Redux, Firebase",
    imageUrl: clothingStoreSnap,
    demo: "https://gregarious-crumble-7647d8.netlify.app/",
    code: "https://github.com/mariavasqueze/React_OnlineStore",
    video: clothingStoreVideo,
  },
  {
    title: "Node JS Rocket Tracker",
    description:
      "Connected the SpaceX API with a NASA mission control front-end to show all launches filtering the information to show which missions have been completed or aborted. All the data is saved on a MongoDB database. The user can also create & abort future missions to the Exoplanets from NASA’s data.",
    desc2: "Tech stack: Node, Express, Axios, MongoDB, React",
    imageUrl: projImg2,
    demo: "https://github.com/mariavasqueze/NodeJS_API_Nasa-Spacex",
    code: null,
    video: null,
  },
  {
    title: "Much more coming very soon!",
    description: "",
    desc2: "",
    imageUrl: comingSoon,
    demo: null,
    code: null,
    video: null,
  },
];

const Projects = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(projects[0]);
  const [openProjNumber, setOpenProjNumber] = React.useState(0);
  const handleOpen = (projNumber) => {
    setOpenProjNumber(projNumber);
    setSelectedProject(projects[projNumber]);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const modalAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <div
      // initial={{ opacity: 0 }}
      // whileInView={window.innerWidth > 1024 ? { opacity: 1 } : {}}
      // animate={window.innerWidth < 1024 ? { opacity: 1 } : {}}
      // transition={{ duration: 1.5 }}
      className="projects-container"
    >
      <h4 className="main-title projects-title animate__animated animate__fadeInDown animate__delay-1s">
        Projects
      </h4>
      <div className="projects-wrap animate__animated animate__fadeInDown animate__delay-1s">
        <div className="section1">
          <div className="item-wrap" onClick={() => handleOpen(0)}>
            <ProjectCard project={projects[0]} />
          </div>
          <div className="item-wrap" onClick={() => handleOpen(1)}>
            <ProjectCard project={projects[1]} />
          </div>
        </div>
        <div className="section2">
          <div className="item-wrap2" onClick={() => handleOpen(2)}>
            <ProjectCard project={projects[2]} />
          </div>
          <div className="item-wrap2" onClick={() => handleOpen(3)}>
            <ProjectCard project={projects[3]} />
          </div>
          <div className="item-wrap2" onClick={() => handleOpen(4)}>
            <ProjectCard project={projects[4]} />
          </div>
        </div>
        <Bottom />
      </div>
      <div className="background-skewd" />
      <Modal className="modal" open={open} onClose={handleClose}>
        <motion.div
          className="modal-wrapper"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalAnimation}
          transition={{ duration: 0.5 }}
        >
          {selectedProject?.video === null ? (
            <>
              <img src={selectedProject.imageUrl} className="videoClass" />
            </>
          ) : (
            <video className="videoClass" controls autoPlay>
              <source src={selectedProject?.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <div className="text-section-video">
            <p className="title-proj">{selectedProject?.title}</p>
            <p className="description">{selectedProject?.description}</p>
            <div className="buttons">
              {selectedProject?.demo !== null && (
                <BlopButton
                  text={"Live Demo"}
                  onClickOption={() => {
                    window.open(selectedProject?.demo);
                  }}
                />
              )}
              {selectedProject?.code !== null && (
                <BlopButton
                  text={"Github Repo"}
                  onClickOption={() => {
                    window.open(selectedProject?.code);
                  }}
                />
              )}
            </div>
          </div>

          <AiOutlineClose className="react-icon" onClick={handleClose} />
          <div
            className="bottom-right"
            onClick={() => {
              setSelectedProject(
                projects[
                  openProjNumber === projects.length - 1
                    ? 0
                    : openProjNumber + 1
                ]
              );
              setOpenProjNumber(
                openProjNumber === projects.length - 1 ? 0 : openProjNumber + 1
              );
            }}
          >
            <p className="arrow-text">Next</p>
            <AiOutlineArrowRight />
          </div>
          <div
            className="bottom-left"
            onClick={() => {
              setSelectedProject(
                projects[
                  openProjNumber === 0
                    ? projects.length - 1
                    : openProjNumber - 1
                ]
              );
              setOpenProjNumber(
                openProjNumber === 0 ? projects.length - 1 : openProjNumber - 1
              );
            }}
          >
            <AiOutlineArrowLeft />
            <p className="arrow-text">Previous</p>
          </div>
        </motion.div>
      </Modal>
    </div>
  );
};

export default Projects;

export const ProjectCard = ({ project }) => {
  return (
    <div className="project-container project-hover ">
      <img
        alt={project.title}
        src={project.imageUrl}
        className="project-image"
      />
      <div className="title-wrap">
        <h4 className="project-title">{`${project.title}`}</h4>

        <p
          className="btn-flip"
          data-back="GO TO PROJECT DETAILS"
          data-front={project.desc2}
        />
      </div>
    </div>
  );
};

export const BlopButton = ({ text, onClickOption }) => {
  return (
    <button className="blob-btn" onClick={onClickOption}>
      {text}
      <span className="blob-btn__inner">
        <span className="blob-btn__blobs">
          <span className="blob-btn__blob"></span>
          <span className="blob-btn__blob"></span>
          <span className="blob-btn__blob"></span>
          <span className="blob-btn__blob"></span>
        </span>
      </span>
    </button>
  );
};
