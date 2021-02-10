import React from "react";

import "./Homepage.css";
import avatar from "../../assets/avatar.png";
import Button from "../../components/UI/Button";

export default function Homepage() {
  return (
    <section className="homepage">
      <div class="homepage-header">
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

      <div className="homepage-find-out-more">
        <p>Check more out</p>
        <i class="fas fa-chevron-down"></i>
      </div>
    </section>
  );
}
