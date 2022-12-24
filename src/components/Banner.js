import { useEffect, useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/CuteAstronautCoffee.svg";

import "animate.css";
import TrackVisibility from "react-on-screen";

const Banner = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const toRotate = [
		"Front-End Developer",
		"Programmer",
		"Coder",
		"React Developer",
	];
	const [text, setText] = useState("");
	const [delta, setDelta] = useState(400);
	const period = 400;

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);

		return () => {
			clearInterval(ticker);
		};
	}, [text]);

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedtext = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1);

		setText(updatedtext);

		// if (isDeleting) {
		// 	setDelta((prevDelta) => prevDelta / 2);
		// }

		if (!isDeleting && updatedtext === fullText) {
			setIsDeleting(true);
			setDelta(period);
		} else if (isDeleting && updatedtext === "") {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setDelta(200);
		}
	};

	return (
		<section className="banner" id="home">
			<Container>
				<Row lassName="align-items-center">
					<Col xs={12} md={6} xl={7}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? "animated_animated animate_fadeIn" : ""
									}
								>
									<span className="tagline">Welcome to my portfolio!</span>
									<h1>
										{`I'm a Full-Stack Developer / `}
										<span className="wrap">{text}</span>
									</h1>
									<p>
										Hi there! my name is Maria, I'm a full-stack developer
										focused on React and web development. Please scroll down to
										see my skills and top projects!
									</p>
									<a className="text-decoration-none" href="#project">
										<button>
											Go to Projects
											<ArrowRightCircle size={25} />
										</button>
									</a>
								</div>
							)}
						</TrackVisibility>
					</Col>
					<Col xs={12} md={6} xl={5}>
						<img
							className="astronaut-img"
							src={headerImg}
							alt="astronaut coding in computer"
						/>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Banner;
