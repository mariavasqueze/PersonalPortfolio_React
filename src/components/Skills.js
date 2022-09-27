import HTML from "../assets/img/html.png";
import CSS from "../assets/img/css.png";
import JavaScript from "../assets/img/javascript.png";
import ReactImg from "../assets/img/react.png";
import Node from "../assets/img/node.png";
import Firebase from "../assets/img/firebase.png";
import Tailwind from "../assets/img/tailwind.png";
import Java from "../assets/img/java-logo.png"
import Mongo from "../assets/img/mongo.png";

const Skills = () => {
	return (
		<div className="skill" id="skills">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="skill-bx">
							<h2>Skills</h2>
							<p className="py-4">
								These are the top technologies I've worked with
							</p>
							<div className="container">
								<div className="row grid">
									<div className="col col-sm-3 special">
										<img src={HTML} alt="HTML icon" />
										<p className="my-4">HTML</p>
									</div>
									<div className="col col-sm-3 special">
										<img src={CSS} alt="CSS icon" />
										<p className="my-4">CSS</p>
									</div>
									<div className="col col-sm-3 special">
										<img src={JavaScript} alt="JavaScript icon" />
										<p className="my-4">JavaScript</p>
									</div>
									<div className="col col-sm-3 special">
										<img src={ReactImg} alt="React icon" />
										<p className="my-4">React</p>
									</div>
									<div class="w-100 d-none d-md-block"></div>
									<div className="col col-sm-3 special">
										<img src={Node} alt="Node icon" />
										<p className="my-4">Node JS</p>
									</div>
									<div className="col col-sm-3 special">
										<img src={Java} alt="Java icon" />
										<p className="my-4">Java</p>
									</div>
									<div className="col col-sm-3 special">
										<img src={Firebase} alt="Firebase icon" />
										<p className="my-4">Firebase</p>
									</div>
									<div className="col col-sm-3 special">
										<img src={Mongo} alt="Mongo icon" />
										<p className="my-4">Mongo DB</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
