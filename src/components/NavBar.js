import { useEffect, useState } from "react";

import { Container, Nav, Navbar } from "react-bootstrap";

import logo from "../assets/img/MV_Logo.svg";
import navIcon1 from "../assets/img/linkedin-icon.svg";
import navIcon2 from "../assets/img/git_image.png";

const NavBar = () => {
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

	return (
		<Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
			<Container>
				<Navbar.Brand href="#home">
					<img src={logo} className="logo-img" alt="logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav">
					<span className="navbar-toggler-icon"></span>
				</Navbar.Toggle>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link
							href="#home"
							className={
								activeLink === "home" ? "active navbar-link" : "navbar-link"
							}
							onClick={() => onUpdateActiveLink("home")}
						>
							Home
						</Nav.Link>
						<Nav.Link
							href="#skills"
							className={
								activeLink === "skills" ? "active navbar-link" : "navbar-link"
							}
							onClick={() => onUpdateActiveLink("skills")}
						>
							Skills
						</Nav.Link>
						<Nav.Link
							href="#project"
							className={
								activeLink === "projects" ? "active navbar-link" : "navbar-link"
							}
							onClick={() => onUpdateActiveLink("projects")}
						>
							Projects
						</Nav.Link>
					</Nav>
					<span className="navbar-text">
						<div className="social-icon">
							<a href="https://github.com/mariavasqueze" target="_blank">
								<img src={navIcon2} alt="github icon" />
							</a>
							<a
								href="https://www.linkedin.com/in/maria-vasqueze/"
								target="_blank"
							>
								<img src={navIcon1} alt="linkedin icon" />
							</a>
						</div>
						<a href="#connect">
						<button className="vvd">
							Let's Connect!
						</button>
						</a>
					</span>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
