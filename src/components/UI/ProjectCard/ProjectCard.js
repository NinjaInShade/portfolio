import React from "react";
import Button from "../Button/Button";

import "./ProjectCard.css";

export default function ProjectCard({ img, title, description, live_URL, github_URL, reversed, white }) {
  return (
    <div className={white ? "project-card project-card-white flex" : "project-card flex"}>
      <div
        className="container flex"
        style={{
          flexDirection: reversed ? "row-reverse" : "",
        }}
      >
        <img src={img} alt="Project thumbnail" />
        <div className="text-container flex">
          <div className="heading-container flex">
            <a href={github_URL} target="_blank" rel="noreferrer">
              <i className="fab fa-github github-icon" style={white ? { color: "var(--purple-800)" } : {}}></i>
            </a>
            <h2 style={white ? { color: "var(--purple-800)" } : {}} className="title">
              {title}
            </h2>
          </div>
          <p style={white ? { color: "var(--purple-400)" } : {}} className="description">
            {description}
          </p>
          <Button>
            <a href={live_URL} target="_blank" rel="noreferrer">
              View live site
            </a>
          </Button>
        </div>
      </div>
      <div className="bg" style={white ? { display: "none" } : {}}></div>
      <div className="wave" style={white ? { display: "none" } : {}}></div>
      <div className="wave-2" style={white ? { display: "none" } : {}}></div>
    </div>
  );
}
