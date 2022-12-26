import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project2-nasa-img.png";
import projImg3 from "../assets/img/underConstruction.jpeg";
import projImg4 from "../assets/img/homePage.png";
import projImg5 from "../assets/img/mobileApp.jpeg";

import ProjectCard from "./ProjectCard";

const Projects = () => {
	const projects = [
		{
			title: "React Web App - Happy Hour Locator",
			description:
				"This is a React Web App team project. It lets all users find the happy hours of restaurants and bars in Vancouver using the Google Maps API. Authorization and database are handled with Firebase. The web app has different user and location sites and functionalities",
			desc2: "Techs used: React, Firebase, Bootstrap, HTML, CSS",
			imageUrl: projImg4,
			demo: "https://www.happyhourlocator.ca/",
			code: "https://github.com/mariavasqueze/happy-hour-locator",
		},
		{
			title: "React / Redux Online Store",
			description:
				"React-based online clothing store. User authentication and the product database is in Firebase. The checkout page uses Stripe to complete payments. All actions of the page are processed with Redux, to see this, check the console when using the page.",
			desc2: "Techs used: JavaScript, React, Redux, Firebase, CSS",
			imageUrl: projImg1,
			demo: "https://gregarious-crumble-7647d8.netlify.app/",
			code: "https://github.com/mariavasqueze/React_OnlineStore",
		},
		{
			title: "Node JS Rocket Tracker",
			description:
				"Connected the SpaceX API with a NASA mission control front-end to show all launches filtering the information to show which missions have been completed or aborted. All the data is saved on a MongoDB database. The user can also create & abort future missions to the Exoplanets from NASA’s data.",
			desc2: "Techs used: Node, Express, Axios, MongoDB, React",
			imageUrl: projImg2,
			demo: "https://github.com/mariavasqueze/NodeJS_API_Nasa-Spacex",
			code: "https://github.com/mariavasqueze/NodeJS_API_Nasa-Spacex",
		},
		{
			title: "Java Mobile App - Job Post Skill Matcher",
			description:
				"Job skill comparison. This Java app calls a Job Posting (demo) API and shows results of jobs in a recycler view which users can compare their top skills (saved on DB) and see & save their matches.",
			desc2: "Techs used: Java, Android Studio, SQLite",
			imageUrl: projImg5,
			demo: "https://github.com/mariavasqueze/JavaMobileApp-JobPostSkillMatcher",
			code: "https://github.com/mariavasqueze/JavaMobileApp-JobPostSkillMatcher",
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
