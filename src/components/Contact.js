import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/AstronautRocketHi.svg";
import TrackVisibility from 'react-on-screen';

const Contact = () => {
	  return (
		<section className="contact" id="connect">
		  <Container>
			<Row className="align-items-center">
			  <Col size={12} md={5} className="img-column">
				<TrackVisibility>
				  {({ isVisible }) =>
					<img className={isVisible ? "animate__animated animate__bounce" : ""} src={contactImg} alt="astronaut in rocket waving hi"/>
				  }
				</TrackVisibility>
			  </Col>
			  <Col size={12} md={6}>
					<h2>Get In Touch</h2>
					<form method="POST" action="https://getform.io/f/22639a99-6c01-4ea0-a110-a8e496c7c634">
					  <Row>
						<Col size={12} sm={6} className="px-1">
						  <input type="text" placeholder="Full Name" name="name" />
						</Col>
						<Col size={12} sm={6} className="px-1">
						  <input type="email" placeholder="Email Address" name="email" />
						</Col>
						<Col size={12} className="px-1">
						  <textarea rows="6" placeholder="Message" name="message"></textarea>
						  <button type="submit"><span>Send</span></button>
						</Col>
					  </Row>
					</form>
			  </Col>
			</Row>
		  </Container>
		</section>
	  )
};

export default Contact;
