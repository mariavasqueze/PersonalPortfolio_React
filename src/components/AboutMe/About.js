import "./about-me.css";
import MeImage from "../../assets/img/maria.png";
import "animate.css";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <div className="about-container">
      <h4 className="main-title animate__animated animate__fadeInDown">
        About
      </h4>
      <div className="content-image">
        <motion.img
          src={MeImage}
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="maria-image"
        />
      </div>

      <div className="text-wrapper">
        <h4 className="about-me-text">
          A <span className="short">short</span> background:
        </h4>

        <p className="desc-me">
          Hi, I'm Maria, I'm a software developer currently living in Vancouver
          and working as a Front End Developer at{" "}
          <a className="link" href="https://sologenic.org/" target="_blank">
            Sologenic.
            <br />
          </a>
          I have a background in Business and Marketing, but decided to go full
          time into software development because it's my passion. I moved to
          Canada from Colombia 🇨🇴 and studied to be a full stack developer. I
          work everyday with React and Next.js in Javascript and Typescript
          working on UI and functionality. Please check out more of my skills
          below.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;

{
}
