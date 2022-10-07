import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg3 from "../assets/img/coming-soon.jpeg";
import projImg4 from "../assets/img/underConstruction.jpeg";

import ProjectCard from "./ProjectCard";

const Projects = () => {
	const projects = [
		{
			title: "React / Redux Online Store",
			description: "React-based online clothing store. User authentication and the product database is in Firebase. The checkout page uses Stripe to complete payments. All actions of the page are processed with Redux, to see this, check the console when using the page.",
			imageUrl: projImg1,
			demo: "https://gregarious-crumble-7647d8.netlify.app/",
			code: "https://github.com/mariavasqueze/React_OnlineStore",
		},
		{
			title: "Node JS Rocket Tracker - Under Construction ",
			description: "Connected the SpaceX API with a NASA mission control front-end to show all launches filtering the information to show which missions have been completed or aborted. All the data is saved on a MongoDB database. The user can also create & abort future missions to the Exoplanets from NASA’s data.",
			imageUrl: projImg3,
			demo: "/",
			code: "/",
		},
		{
			title: "Python Project - Under Construction",
			description: "This is gonna be a very cool project! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			imageUrl: projImg3,
			demo: "/",
			code: "/",
		},
		{
			title: "Java Web App - Under Construction",
			description: "- Happy Hour Locator - This is a team project in development. It works as a web app in which users will be able to find all the happy hours in Vancouver and filter by location and time. Users can join as a member to get special discounts and access to special day events in restaurants and bars.",
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
