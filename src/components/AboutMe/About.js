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
          {/* A <span className="short">short</span> background: */}
        </h4>

        <p className="desc-me">
          
          Hi there! My name is Maria, I'm a Full Stack developer currently working as a Front End Developer in the Fintech industry at{" "}
          <a className="link" href="https://sologenic.org/" target="_blank">
            Sologenic.
            <br />
          </a>
          I'm Spanish/Colombian and I'm currently living in Vancouver, Canada. I
          work everyday with React and Next.js in Javascript and Typescript
          working on amazing UI and functionalities. Please check out more of my work and project experience
          below.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;

{
}
