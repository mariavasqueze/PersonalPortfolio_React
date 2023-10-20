import "./navbar.css";
import { useEffect, useState } from "react";
import "animate.css";
import { BlopButton } from "../Projects/Projects";
import logo from "../../assets/img/MV_Logo.svg";
import navIcon1 from "../../assets/img/linkedin-icon.svg";
import navIcon2 from "../../assets/img/git_image.png";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const NavBar = ({ isLoaded }) => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (link) => {
    setActiveLink(link);
  };

  if (!isLoaded) {
    return <span></span>;
  }

  return (
    <div className={`navbar-wrapper `}>
      <div className="left-side animate__animated animate__fadeInLeft animate__delay-1s">
        <a
          href="#hero"
          className="logo-mv"
          onClick={() => onUpdateActiveLink("hero")}
        >
          MV
        </a>
        <div className={`menu-options`}>
          <a
            href="#projects"
            className={
              activeLink === "projects" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => onUpdateActiveLink("projects")}
          >
            Projects
          </a>
          <a
            href="#experience"
            className={
              activeLink === "experience" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => onUpdateActiveLink("experience")}
          >
            Work Experience
          </a>
          <a
            href="#about"
            className={
              activeLink === "about" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => onUpdateActiveLink("about")}
          >
            About Me
          </a>
        </div>
      </div>
      <div className="right-side animate__animated animate__fadeInRight animate__delay-1s">
        <div className="social-icon">
          <a href="https://github.com/mariavasqueze" target="_blank">
            <img src={navIcon2} alt="github icon" />
          </a>
          <a href="https://www.linkedin.com/in/maria-vasqueze/" target="_blank">
            <img src={navIcon1} alt="linkedin icon" />
          </a>
        </div>
      </div>
    </div>
  );
};
//   return (
//     <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
//       <Container>
//         <Navbar.Brand href="#home">
//           <p className="logo-mv">MV</p>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav">
//           <span className="navbar-toggler-icon"></span>
//         </Navbar.Toggle>
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link
//               href="#projects"
//               className={
//                 activeLink === "projects" ? "active navbar-link" : "navbar-link"
//               }
//               onClick={() => onUpdateActiveLink("projects")}
//             >
//               Projects
//             </Nav.Link>
//             <Nav.Link
//               href="#home"
//               className={
//                 activeLink === "home" ? "active navbar-link" : "navbar-link"
//               }
//               onClick={() => onUpdateActiveLink("home")}
//             >
//               About Me
//             </Nav.Link>
//             <Nav.Link
//               href="#skills"
//               className={
//                 activeLink === "skills" ? "active navbar-link" : "navbar-link"
//               }
//               onClick={() => onUpdateActiveLink("skills")}
//             >
//               Contact
//             </Nav.Link>
//           </Nav>
//           <span className="navbar-text">

//             {/* <a href="#connect">
//     <button className="vvd">Let's Connect!</button>
//   </a> */}
//           </span>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

export default NavBar;
