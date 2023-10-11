import "./skills.css";
import Spline from "@splinetool/react-spline";
import HTML from "../../assets/img/html.png";
import CSS from "../../assets/img/css.png";
import JavaScript from "../../assets/img/javascript.png";
import ReactImg from "../../assets/img/react.png";
import Node from "../../assets/img/node.png";
import Firebase from "../../assets/img/firebase.png";
import Java from "../../assets/img/java-logo.png";
import Mongo from "../../assets/img/mongo.png";
import Redux from "../../assets/img/redux.svg";
import Next from "../../assets/img/next.png";
import TypeScript from "../../assets/img/typescript.png";
import Python from "../../assets/img/python.png";
import { motion } from "framer-motion";

const SKILLS = [
  { name: "HTML", file: HTML, directionLeft: true },
  { name: "CSS", file: CSS, directionLeft: true },
  { name: "JavaScript", file: JavaScript, directionLeft: true },
  { name: "TypeScript", file: TypeScript, directionLeft: true },
  { name: "React", file: ReactImg, directionLeft: false },
  { name: "Redux", file: Redux, directionLeft: false },
  { name: "Next.js", file: Next, directionLeft: false },
  { name: "Node", file: Node, directionLeft: false },
  { name: "Python", file: Python, directionLeft: true },
  { name: "Firebase", file: Firebase, directionLeft: true },
  { name: "Java", file: Java, directionLeft: true },
  { name: "MongoDB", file: Mongo, directionLeft: true },
  // { name: "AI", file: "", directionLeft: false },
];

const Skills = () => {
  return (
    <motion.div className="skill-wrapper">
      <h3 className="skills-title">Skills</h3>

      <div className="skills-grid">
        <SkillsSpline />
      </div>
    </motion.div>
  );
};

export default Skills;

export const SkillsSpline = () => {
  return (
    <Spline scene="https://prod.spline.design/rbCUWwHKHqiLqQa9/scene.splinecode" />
  );
};

export const Skill = ({ skill, directionLeft }) => {
  return (
    <div className="skill-item">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(0,0,0,0.3)" }}
        src={skill?.file}
        alt={skill?.name}
        className="skill-icon"
      />
      {/* <p className="skill-name">{skill.name}</p> */}
    </div>
  );
};
