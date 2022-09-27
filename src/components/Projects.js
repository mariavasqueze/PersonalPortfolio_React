import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/coming-soon.jpeg";
import projImg4 from "../assets/img/underConstruction.jpeg";

import ProjectCard from "./ProjectCard";

const Projects = () => {
	const projects = [
		{
			title: "React / Redux Online Store",
			description:
				"In this project I used react to build an online clothing store. User authentication and the product database is in Firebase. The theckout page uses Stripe to complete payments. All actions of the page are processed with Redux, to see, check the console when using the page.",
			imageUrl: projImg1,
			demo: "https://gregarious-crumble-7647d8.netlify.app/",
			code: "https://github.com/mariavasqueze/React_OnlineStore",
		},
		{
			title: "Node JS Rocket Tracker - Under Construction ",
			description: "This is gonna bea very cool project!",
			imageUrl: projImg3,
			demo: "/",
			code: "/",
		},
		{
			title: "Python Project - Under Construction",
			description: "This is gonna be a very cool project!",
			imageUrl: projImg3,
			demo: "/",
			code: "/",
		},
		{
			title: "Java Web App - Happy Hour Locator - Under Construction",
			description: "This is gonna bea very cool project!",
			imageUrl: projImg4,
			demo: "/",
			code: "/",
		},
	];

	return (
		<section className="project" id="project">
			<Container>
				<Row>
					<Col size={12}>
						<h2>Projects</h2>
						<p>Top 4 latest projects. React, Node, Java, Python</p>
						<Container>
							<Row>
								{projects.map((project, index) => {
									return <ProjectCard key={index} {...project} />;
								})}
							</Row>
						</Container>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Projects;
