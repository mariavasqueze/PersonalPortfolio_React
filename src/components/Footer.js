import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/MV_Logo.svg";
import navIcon1 from "../assets/img/git_image.png";
import navIcon2 from "../assets/img/linkedin-icon.svg";

const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<Row className="align-items-center">
					<Col size={12} sm={6}>
						<img src={logo} className="logo-img" alt="Logo MV" />
					</Col>
					<Col size={12} sm={6} className="text-center text-sm-end">
						<div className="social-icon">
							<a href="https://github.com/mariavasqueze" target="_blank">
								<img src={navIcon1} alt="github icon" />
							</a>
							<a href="https://www.linkedin.com/in/maria-vasqueze/" target="_blank">
								<img src={navIcon2} alt="linkedin icon" />
							</a>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
