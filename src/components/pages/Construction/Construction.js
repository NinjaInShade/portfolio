import React from "react";
import construction from "../../../assets/images/construction.svg";

import "./Construction.css";
import "../Home/Home.css";

export default function Construction() {
  return (
    <header className="construction-header flex">
      <div className="construction-text-container flex">
        <div className="construction-text">
          <h1>
            <span>Page</span> under construction
          </h1>
          <div className="flex">
            <div className="flex">
              <p>
                This website is currently undergoing a redesign, and since i’m not a designer, it might take a while before i find something i’m happy
                with.
              </p>
              <p className="construction-redirect">
                Click <a href="/">here</a> to go back to homepage.
              </p>
            </div>
            <img src={construction} alt="Under construction illustration" />
          </div>
        </div>
      </div>
      <div className="home-wave"></div>
      <div className="home-pattern"></div>
    </header>
  );
}
