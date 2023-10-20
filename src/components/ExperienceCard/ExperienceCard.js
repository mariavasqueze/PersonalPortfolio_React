import "./experience-card.css";
import React from "react";
import { motion } from "framer-motion";

function ExperienceCard({ experience }) {
  console.log(window.innerWidth);
  return (
    <article className="exp-card-wrapper">
      <div
        className="background-top"
        style={{ backgroundImage: `url(${experience.media.img})` }}
      >
        <motion.img
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.2 }}
          whileInView={window.innerWidth > 1024 ? { opacity: 1, y: 10 } : {}}
          animate={window.innerWidth < 1024 ? { opacity: 1, y: 10 } : {}}
          viewport={{ once: true }}
          className="card-img"
          src={experience.companyImage}
        />
        <div className="details-wrap">
          <h4 className="position-name">{experience.position}</h4>
          <p className="company-name">{experience.company}</p>
          {experience.techs && (
            <div className="techs-used">
              {experience.techs.map((tech, index) => {
                return <img className="skill-img" src={tech} key={index} />;
              })}
            </div>
          )}
          <p className="date">{experience.date}</p>
          <p className="summary">{experience.summary}</p>
          {experience.projectLinks && (
            <div className="links">
              <p className="summary">{`Some project links:`}</p>
              {experience.projectLinks.map((link, index) => {
                return (
                  <a
                    key={index}
                    className="proj-link"
                    href={link.link}
                    target="_blank"
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard;
