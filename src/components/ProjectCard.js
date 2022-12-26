import { Col } from "react-bootstrap";


const ProjectCard = (project) => {
	return (
		<Col size={12} sm={4} md={6} className="my-4 project-block">
      <div className="proj-imgbx">
        <img src={project.imageUrl} />
        <div className="proj-txtx">
        <div>
          <h4>{project.title}</h4>
          <span className="description">{project.description}</span>
          <br></br>
          <span className="desc2">{project.desc2}</span>
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
