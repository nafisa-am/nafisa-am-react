import React from "react";
const ProjectCard = (props) => {
  return (
    <>
      <div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href={props.githubLink}>
                <img
                  src={props.imagePath}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Code-Quiz"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>{props.title}</h4>
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
