import React from "react";

import "../Homepage/Homepage.css";
import "../Homepage/HomepageProjects.css";

import avatar from "../../../assets/avatar.png";
import SiteBuilderThumbnail from "../../../assets/SiteBuilderThumbnail.png";
import FlashcardsThumbnail from "../../../assets/FlashcardsThumbnail.png";
import TodoThumbnail from "../../../assets/TodoThumbnail.png";
import PortalThumbnail from "../../../assets/PortalThumbnail.png";
import PlaceSharerThumbnail from "../../../assets/PlaceSharerThumbnail.png";
import FormThumbnail from "../../../assets/FormThumbnail.png";
import Button from "../../UI/Button";
import ProjectCard from "../../UI/ProjectCard";

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
      <section className="homepage-projects" id="homepage-projects">
        <h1>
          Here are my <span>projects</span>. Click{" "}
          <span>
            <a href="/projects">here</a>
          </span>{" "}
          for a more in depth descriptions of each project.
        </h1>
        <div className="homepage-projects-grid">
          <ProjectCard
            img={SiteBuilderThumbnail}
            title="Site builder app"
            description="This app helps people with making a polished website by providing the user with resources, tips and things that should be included to provide a good user experience with strong UI."
            live_URL="https://sitebuilder-66d12.web.app/"
            github_URL="https://github.com/NinjaInShade/site-builder"
            tags={["React", "Node.js", "Full-stack"]}
          />
          <ProjectCard
            img={FlashcardsThumbnail}
            title="Flashcard app"
            description="This app is designed to help with revision by letting you make flashcards which you can flip to reveal the answer. You can group flashcard into a collection and even test yourself."
            live_URL="https://leonsflashcards.web.app/"
            github_URL="https://github.com/NinjaInShade/flashcards"
            tags={["React", "Node.js", "Full-stack"]}
          />
          <ProjectCard
            img={PortalThumbnail}
            title="Personal hub app"
            description="I made this app for myself with the intention of having a bunch of tools i'd find useful. It includes a link to my site builder site, my todo app, documentation style articles about code concepts, book reviews and an about section plus some settings"
            live_URL="https://leonshub-ec26e.web.app/"
            github_URL="https://github.com/NinjaInShade/leons_hub"
            tags={["React", "Node.js", "Full-stack"]}
          />
          <ProjectCard
            img={TodoThumbnail}
            title="Todo app"
            description="I feel like a good project any developer should make is a todo app, as it incorporates simple but key concepts like querying databases and such. I added more to mine by adding a light/dark theme."
            live_URL="https://todoapp-48ccc.web.app/"
            github_URL="https://github.com/NinjaInShade/todoApp/"
            tags={["React", "Node.js", "Full-stack"]}
          />
          <ProjectCard
            img={PlaceSharerThumbnail}
            title="Place sharing app"
            description="This was one of my first full-stack projects and it enables users to share where they've been and can include some descriptions, photos and a marker on a map. You can also view what other people are sharing too."
            live_URL="https://placesharereact.web.app/"
            github_URL="https://github.com/NinjaInShade/mernPlaceSharer"
            tags={["React", "Node.js", "Full-stack"]}
          />
          <ProjectCard
            img={FormThumbnail}
            title="Form with validation"
            description="This is not a full app but more of a component. My idea was to make a form with easy to use custom live validations as you type. You can view or hide the password field, submit the form and will validate the whole form."
            live_URL="https://formwithvalidation.web.app/"
            github_URL="https://github.com/NinjaInShade/formWithValidation"
            tags={["React"]}
          />
        </div>
      </section>
    </>
  );
}
