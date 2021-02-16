import React from "react";
import Button from "../UI/Button";

import "./ProjectCard.css";

export default function ProjectCard({ img, title, description, live_URL, github_URL, reversed, white }) {
  return (
    <div className="project-card flex" style={reversed ? { flexDirection: "row-reverse" } : {}}>
      <img src={img} alt="Project thumbnail" />
      <div className="project-card-text flex">
        <div className="project-card-text-title flex">
          <a href={github_URL} target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <h2>{title}</h2>
        </div>
        <p>{description}</p>
        <Button>
          <a href={live_URL} target="_blank" rel="noreferrer">
            View live site
          </a>
        </Button>
      </div>
      <div className="project-card-bg"></div>
      <div className="project-card-wave"></div>
      <div className="project-card-wave-2"></div>
    </div>
  );
}
