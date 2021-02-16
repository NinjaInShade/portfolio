import React from "react";
import { Link } from "react-router-dom";
import Astronaught from "../../assets/images/astronaught.svg";
import Button from "../UI/Button";
import ProjectCard from "../UI/ProjectCard";
import FlashcardsThumbnail from "../../assets/thumbnails/FlashcardsThumbnail.png";
import SiteBuilderThumbnail from "../../assets/thumbnails/SiteBuilderThumbnail.png";
import TodoThumbnail from "../../assets/thumbnails/TodoThumbnail.png";
import HubThumbnail from "../../assets/thumbnails/HubThumbnail.png";

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
          live_URL="https://leonsflashcards.web.app/"
          github_URL="https://github.com/NinjaInShade/flashcards"
        />
        <ProjectCard
          img={SiteBuilderThumbnail}
          title="Site builder app"
          description="This app’s idea is to help people with making a polished website through providing the user with resources, tips and things that should be included to provide a good user experience with strong UI."
          live_URL="https://sitebuilder-66d12.web.app/"
          github_URL="https://github.com/NinjaInShade/site-builder"
          reversed
          white
        />
        <ProjectCard
          img={TodoThumbnail}
          title="Todo app"
          description="Most web developers have made this project as it encorporates key but simple concepts for a beginner developer to learn. I decided to add a dark/light theme to it to make it a bit less bland."
          live_URL="https://todoapp-48ccc.web.app/"
          github_URL="https://github.com/NinjaInShade/todo-app"
        />
        <ProjectCard
          img={HubThumbnail}
          title="Personal hub app"
          description="I made this for myself and included some useful tools like links to my site builder app and todo app, code docs and experimented with a settings page where you can customize bits of the app."
          live_URL="https://leonshub-ec26e.web.app/"
          github_URL="https://github.com/NinjaInShade/leons_hub"
          reversed
          white
        />
      </section>
    </>
  );
}
