import React from "react";
import Zoom from "react-reveal/Fade";
import Astronaught from "../../../assets/images/astronaught.svg";
import Button from "../../UI/Button/Button";
import ProjectCard from "../../UI/ProjectCard/ProjectCard";
import ContactForm from "../../UI/ContactForm/ContactForm";
import projects from "../../../util/projects";
import { useSpring, animated, config } from "react-spring";
import { Link } from "react-router-dom";

import "./Home.css";
import "./Home-projects.css";
import "../../UI/Button/Button.css";

export default function Home() {
  const astronaught = useSpring({
    to: [{ left: "0", top: "0" }],
    from: { top: "50vh", left: "50vw" },
    delay: "100",
    config: config.slow,
  });

  const header = useSpring({
    to: { right: "0" },
    from: { right: "100vw" },
    config: config.gentle,
  });

  const paragraph = useSpring({
    to: { right: "0" },
    from: { right: "100vw" },
    delay: "500",
    config: config.gentle,
  });

  const btn = useSpring({
    to: { right: "0" },
    from: { right: "100vw" },
    delay: "1000",
    config: config.gentle,
  });

  return (
    <>
      <header className="home-header flex">
        <div className="home-text-container flex">
          <div className="home-text flex">
            <animated.h1 style={header}>Hi, I'm Leon</animated.h1>
            <animated.p style={paragraph}>I’m a UK based web developer developing complete full-stack applications</animated.p>
            <animated.button className="btn" style={btn}>
              <a href="/#contact">Contact me</a>
            </animated.button>
          </div>
          <animated.img src={Astronaught} alt="Floating astronaught" style={astronaught} />
        </div>
        <div className="home-wave"></div>
        <div className="home-pattern"></div>
      </header>
      <section className="home-projects">
        <Zoom>
          <div className="home-projects-text">
            <h1>My projects</h1>
            <p>Most of my projects are full-stack as i feel you learn the most from them, and are more exciting to create.</p>
            <Button>
              <Link to="/projects">View all projects</Link>
            </Button>
          </div>
        </Zoom>

        {projects.map((project, index) => {
          return (
            <Zoom>
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
            </Zoom>
          );
        })}
      </section>
      <ContactForm />
    </>
  );
}
