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
		"React Developer",
		"Front End Developer",
		"Programmer",
		"Coder",
	];
	const [text, setText] = useState("");
	const [delta, setDelta] = useState(300);
	const period = 2000;

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

		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2);
		}

		if (!isDeleting && updatedtext === fullText) {
			setIsDeleting(true);
			setDelta(period);
		} else if (isDeleting && updatedtext === "") {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setDelta(500);
		}
	};

	return (
		<section className="banner" id="home">
			<Container>
				<Row lassName="align-items-center">
					<Col xs={12} md={6} xl={7}>
						<TrackVisibility>
						{({ isVisible }) =>
							<div className={isVisible ? "animated_animated animate_fadeIn" : ""}>
								<span className="tagline">Welcome to my portfolio!</span>
								<h1>
									{`I'm a Software Developer / `}
									<span className="wrap">{text}</span>
								</h1>
								<p>
									My name is Maria, I'm a software developer focused on
									front-end programming. Please scroll down to see my skills and
									top projects!
								</p>
								<a className="text-decoration-none" href="#project">
								<button>
									Go to Projects
									<ArrowRightCircle size={25} />
								</button>
								</a>
							</div>}
						</TrackVisibility>
					</Col>
					<Col xs={12} md={6} xl={5}>
						<img src={headerImg} alt="astronaut coding in computer" />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Banner;
