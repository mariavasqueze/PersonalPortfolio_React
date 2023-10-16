import React from "react";
import "./bottom.css";
import "animate.css";
import LinkedIn from "../../assets/img/LinkedIn_logo_initials.png";
import Gmail from "../../assets/img/gmail.png";
import Github from "../../assets/img/github_white.png";

function Bottom() {
  return (
    <div className="bottom-container">
      <h3 className="bottom-title animate__animated animate__fadeInDown">
        Contact
      </h3>
      <div className="contact-items ">
        <div className="contact-item animate__animated animate__fadeInLeft">
          <a
            className="link"
            href="https://www.linkedin.com/in/maria-vasqueze/"
            target="_blank"
          >
            <img src={LinkedIn} alt="linkedin logo" className="link-img" />
          </a>
        </div>
        <div className="contact-item animate__animated animate__fadeInUp">
          <a
            className="link"
            href="mailto:mariadelmarvze@gmail.com"
            target="_blank"
          >
            <img src={Gmail} alt="linkedin logo" className="link-img" />
          </a>
        </div>
        <div className="contact-item animate__animated animate__fadeInRight">
          <a
            className="link"
            href="https://github.com/mariavasqueze"
            target="_blank"
          >
            <img src={Github} alt="linkedin logo" className="link-img" />
          </a>
        </div>
      </div>
      <div className="finale">
        <p>@ María del Mar Vásquez 2023</p>
        <p>Portfolio Website</p>
      </div>
    </div>
  );
}

export default Bottom;
