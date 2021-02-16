import React from "react";
import { Link } from "react-router-dom";
import Astronaught from "../../assets/images/astronaught.svg";
import "./Home.css";

import Button from "../UI/Button";

export default function Home() {
  return (
    <header className="home-header">
      <div className="home-text-container">
        <div className="home-text">
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
  );
}
