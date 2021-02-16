import React from "react";
import { Link } from "react-router-dom";
import Astronaught from "../../assets/images/astronaught.svg";
import Button from "../UI/Button";
import ProjectCard from "../UI/ProjectCard";
import FlashcardsThumbnail from "../../assets/thumbnails/FlashcardsThumbnail.png";

import "./Home.css";
import "./Home-projects.css";

export default function Home() {
  return (
    <>
      <header className="home-header flex">
        <div className="home-text-container flex">
          <div className="home-text flex">
            <h1>Hi, I'm Leon</h1>
            <p>I’m a UK based web developer developing creative full-stack applications</p>
            <Button>
              <Link to="/#contact">Contact me</Link>
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

        <ProjectCard
          img={FlashcardsThumbnail}
          title="Flashcards app"
          description="This app is designed to help with revision by letting you make flashcards which you can flip to reveal the answer. You can group flashcard into a collection and even test yourself."
          live_URL="/"
          github_URL="https://github.com/NinjaInShade/flashcards"
        />
      </section>
    </>
  );
}
