import React from "react";
import "./ProjectCard.css";

export default function ProjectCard({ img, title, description, live_URL, github_URL, tags }) {
  return (
    <div className="project-card">
      <img src={img} alt="Project thumbnail" />
      <div className="project-card-info">
        <div className="project-card-header">
          <h2>{title}</h2>
          <div className="project-card-icons">
            <a href={live_URL} target="_blank" rel="noreferrer">
              <i className="fas fa-external-link-alt"></i>
            </a>
            <a href={github_URL} target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        <p className="project-card-description">{description}</p>

        <div className="project-card-tags">
          {tags.map((tag) => {
            return <div key={tag}>{tag}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
