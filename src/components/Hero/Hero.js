import "./hero.css";
import React from "react";
import SplitType from "split-type";
import "animate.css";
import gsap from "gsap";
import SplineBackground from "../SplineBackground/SplineBackground";

const Hero = () => {
  // const headLine = new SplitType("h1");
  // const secondHeadLine = new SplitType("h2");
  // const myText2 = new SplitType("h3", { charClass: "char2" });
  // var tl = gsap.timeline({ defaults: { ease: "Expo.easeInOut" } });

  // tl.from(".char", {
  //   y: -100,
  //   stagger: 0.05,
  //   delay: 1,
  // })
  //   .from(
  //     ".char2",
  //     {
  //       y: -100,
  //       stagger: 0.05,
  //       duration: 0.6,
  //     },
  //     "-=1.2"
  //   )
  //   .to("h1,h2,h3", {
  //     y: 0,
  //     delay: 0.4,
  //     duration: 1.4,
  //   });

  return (
    <div className="hero-container">
      <SplineBackground url="https://prod.spline.design/Pcz3HZiVYE9vnMhx/scene.splinecode" />
      <h1 className="title animate__animated animate__fadeInDown animate__delay-1s">
        Hi There!
      </h1>
      <h2 className="title animate__animated animate__fadeInDown animate__delay-1s">
        I'm Maria
      </h2>
      <h3 className="title-two animate__animated animate__fadeInDown animate__delay-2s">
        Software Developer
      </h3>
      {/* <div style={{ display: "flex" }}>
        <h3> JS /</h3>
        <h3> TS /</h3>
        <h3> React /</h3>
        <h3> Next.js /</h3>
        <h3> & more </h3>
      </div> */}
      <h3 className="title-para animate__animated animate__fadeIn animate__delay-2s">
        <a href="#experience">Work Experience | </a>
        <a href="#projects">Projects</a>
      </h3>
    </div>
  );
};

export default Hero;
