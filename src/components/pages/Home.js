import React from "react";
import { Link } from "react-router-dom";
import Astronaught from "../../assets/images/astronaught.svg";
import Button from "../UI/Button";

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
      <section className="home-projects"></section>
    </>
  );
}
