import React from "react";
import "./Project.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = ({
  description,
  gitHubUrl,
  image,
  liveSiteUrl,
  technologies,
  title,
}) => {
  return (
    <div className="row single-project">
      <div className="col-md-4 project-image">
        {liveSiteUrl ? (
          <a href={liveSiteUrl} target="_blank" rel="noopener noreferrer">
            <img src={image} alt="Project/Company picture" />
          </a>
        ) : (
          <img src={image} alt="Sky Retro" />
        )}
      </div>
      <div className="col-md-8 single-project-right">
        <div className="project-title">
          <h5>
            {liveSiteUrl ? (
              <a href={liveSiteUrl} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            ) : (
              <>{title}</>
            )}
          </h5>
        </div>
        <div className="project-description">
          <p>{description}</p>
          <p>Technologies:</p>
          {technologies.map((technology, index) => (
            <button className="btn btn-outline-danger technologies" key={index}>{technology}</button>
          ))}
          <div className="project-links">
            <div className="row">
              {liveSiteUrl && (
                <div className="col-sm-12">
                  <FontAwesomeIcon icon={faDesktop} />
                  <span> </span>
                  <a href={liveSiteUrl}>Live Site</a>
                </div>
              )}
              {gitHubUrl && (
                <div className="col-sm-12">
                  <FontAwesomeIcon icon={faGithub} />
                  <span> </span>
                  <a href={gitHubUrl}>View Repo</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  description: PropTypes.string.isRequired,
  gitHubUrl: PropTypes.string,
  image: PropTypes.string.isRequired,
  liveSiteUrl: PropTypes.string,
  technologies: PropTypes.array,
  title: PropTypes.string.isRequired,
};

export default Project;