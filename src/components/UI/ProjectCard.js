import React from "react";
import Button from "../UI/Button";

import "./ProjectCard.css";

export default function ProjectCard({ img, title, description, live_URL, github_URL, reversed, white }) {
  return (
    <div
      className={white ? "project-card-white flex" : "project-card flex"}
      style={{
        flexDirection: reversed ? "row-reverse" : "",
      }}
    >
      <img src={img} alt="Project thumbnail" />
      <div className="project-card-text flex">
        <div className="project-card-text-title flex">
          <a href={github_URL} target="_blank" rel="noreferrer">
            <i className="fab fa-github" style={white ? { color: "#2E1B6F" } : {}}></i>
          </a>
          <h2 style={white ? { color: "#2E1B6F" } : {}}>{title}</h2>
        </div>
        <p style={white ? { color: "#5B46B8" } : {}}>{description}</p>
        <Button>
          <a href={live_URL} target="_blank" rel="noreferrer">
            View live site
          </a>
        </Button>
      </div>
      <div className="project-card-bg" style={white ? { display: "none" } : {}}></div>
      <div className="project-card-wave" style={white ? { display: "none" } : {}}></div>
      <div className="project-card-wave-2" style={white ? { display: "none" } : {}}></div>
    </div>
  );
}
