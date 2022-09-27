import { Col, Row } from "react-bootstrap";

import projImg1 from "../assets/img/project-img1.png";


const ProjectCard = (project) => {
	return (
		<Col size={12} sm={4} md={6} className="my-4 project-block">
      <div className="proj-imgbx">
        <img src={project.imageUrl} />
        <div className="proj-txtx">
        <div>
          <h4>{project.title}</h4>
          <span>{project.description}</span>
        </div>
          <div className="button-box">
          <a className="project-button" href={project.demo} target="_blank">
            <button>
            <span>Demo</span>
            </button>
          </a>
          <a className="project-button special-button" href={project.code} target="_blank">
            <button>
            <span>Code</span>
            </button>
          </a>
          </div>
        </div>
      </div>
    </Col>
	);
};



export default ProjectCard;
