import React from "react";
import { Link } from "react-router-dom";
import Astronaught from "../../assets/images/astronaught.svg";
import Button from "../UI/Button";
import ProjectCard from "../UI/ProjectCard";
import ContactForm from "../UI/ContactForm";
import projects from "../../data/projects";

import "./Home.css";
import "./Home-projects.css";

export default function Home() {
  return (
    <>
      <header className="home-header flex">
        <div className="home-text-container flex">
          <div className="home-text flex">
            <h1>Hi, I'm Leon</h1>
            <p>I’m a UK based web developer developing complete full-stack applications</p>
            <Button>
              <a href="/#contact">Contact me</a>
            </Button>
          </div>
          <img src={Astronaught} alt="Floating astronaught" />
        </div>
        <div className="home-wave"></div>
        <div className="home-pattern"></div>
      </header>
      <section className="home-projects">
        <div className="home-projects-text">
          <h1>My projects</h1>
          <p>Most of my projects are full-stack as i feel you learn the most from them, and are more exciting to create.</p>
          <Button>
            <Link to="/projects">View all projects</Link>
          </Button>
        </div>

        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              img={project.img}
              title={project.title}
              description={project.description}
              live_URL={project.live_URL}
              github_URL={project.github_URL}
              reversed={project.reversed}
              white={project.white}
            />
          );
        })}
      </section>
      <ContactForm />
    </>
  );
}
