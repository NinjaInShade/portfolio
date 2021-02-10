import React from "react";

import "../Homepage/Homepage.css";
import "../Homepage/HomepageProjects.css";
import avatar from "../../../assets/avatar.png";
import Button from "../../UI/Button";

export default function Homepage() {
  return (
    <>
      <section className="homepage">
        <div className="homepage-header">
          <h1>
            Hi, I'm <span>Leon</span>
          </h1>
          <p className="homepage-role">UK based web developer</p>
          <img src={avatar} alt="Avatar of me" />
          <Button>
            <a href="/projects">My projects</a>
          </Button>
          <a className="homepage-cv" href="/">
            Download cv
          </a>
        </div>

        <a href="/#homepage-projects" className="homepage-find-out-more">
          <p>Check more out</p>
          <i className="fas fa-chevron-down"></i>
        </a>
      </section>
      <section className="homepage-projects" id="homepage-projects"></section>
    </>
  );
}
