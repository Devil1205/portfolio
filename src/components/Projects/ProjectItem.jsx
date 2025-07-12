import React from "react";
import "./Projects.css";
import { MDBIcon } from "mdb-react-ui-kit";
import PropTypes from "prop-types";

function ProjectItem(props) {
  const flip = (element) => {
    let temp = element.target.offsetParent.offsetParent.firstChild;
    if (temp.style.transform === "rotateY(180deg)")
      temp.style.transform = "rotate(0deg)";
    else temp.style.transform = "rotateY(180deg)";
  };

  return (
    <div className="project-container">
      <div className="project-card">
        <div className="project project-front">
          <div className="category-badge">{props.category}</div>
          <a href={props.live || props.code} target="_blank" rel="noreferrer">
            <div className="image-container">
              <img src={props.image} alt="" />
              <div className="image-overlay">
                <span>View Live Demo</span>
                <MDBIcon fas icon="external-link-alt" className="ms-2" />
              </div>
            </div>
          </a>
          <div className="overview">
            <a href={props.live || props.code} target="_blank" rel="noreferrer">
              <h1 className="project-title">{props.title}</h1>
            </a>

            <div className="project-links">
              {props.live && (
                <a
                  href={props.live}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  <MDBIcon fas icon="external-link-alt" size="lg" />
                </a>
              )}
              {props.code && (
                <a
                  href={props.code}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  <MDBIcon fab icon="github" size="xl" />
                </a>
              )}
            </div>
          </div>
          <div className="tech-section">
            <h4 className="tech-title">Technology Stack</h4>
            <div className="skills">
              {props.skills !== undefined &&
                props.skills.map((element, index) => (
                  <button className="tech-badge btn" key={index}>
                    {element}
                  </button>
                ))}
            </div>
          </div>
        </div>
        <div className="project project-back">
          <div className="description">
            <h3 className="mb-3">Project Overview</h3>
            {props.desc}
          </div>
        </div>
      </div>
      <div className="flip-button" onClick={flip}>
        <MDBIcon fas icon="info-circle" size="2x" />
      </div>
    </div>
  );
}

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
};

export default ProjectItem;
