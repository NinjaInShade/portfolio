import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

import Logo from "../../../assets/brand/logo.png";
import Button from "../Button/Button";

export default function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false);

  function open_sidebar() {
    // Use if want to disable scrolling when opening sidebar
    // Prefer to not as it hides the vertical scrollbar which means the page gets shorter and disrupts the smoothness of the animation.

    // document.body.style.overflow = openSidebar ? "initial" : "hidden";
    // document.body.style.height = openSidebar ? "initial" : "100vh";
    setOpenSidebar(!openSidebar);
  }

  // Sends request to backend to download cv
  function downloadCV() {
    // Send fetch req to backend
    fetch(`${process.env.REACT_APP_DOWNLOAD_DOMAIN}CV.pdf`)
      .then((response) => {
        console.log(response.status);

        response.json();
      })
      .then((data) => {
        console.log("Successfully downloaded CV");

        return;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <nav>
      <div className="navbar-container">
        <Link to="/">
          <img src={Logo} alt="Brand logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <NavLink to="/" exact activeClassName="nav-link-active" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" exact activeClassName="nav-link-active" className="nav-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" exact activeClassName="nav-link-active" className="nav-link">
              Projects
            </NavLink>
          </li>
          <li>
            <button onClick={downloadCV} className="download-cv-nav">
              Download cv
            </button>
          </li>
          <li>
            <Button>
              <a href="/#contact" className="scroll">
                Contact me
              </a>
            </Button>
          </li>
        </ul>
        <button className="hamburger" onClick={open_sidebar}>
          <i className="fas fa-bars"></i>
        </button>
        <div
          className="sidebar-overlay"
          style={openSidebar ? { opacity: "100", zIndex: "2", pointerEvents: "all" } : {}}
          onClick={open_sidebar}
        ></div>
        <div className="sidebar" style={openSidebar ? { transform: "translateX(-250px)" } : { transform: "translateX(0)" }}>
          <button onClick={open_sidebar}>
            <i className="fas fa-times"></i>
          </button>
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="nav-link-active" className="nav-link" onClick={open_sidebar}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" exact activeClassName="nav-link-active" className="nav-link" onClick={open_sidebar}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" exact activeClassName="nav-link-active" className="nav-link" onClick={open_sidebar}>
                Projects
              </NavLink>
            </li>
            <li>
              <button
                onClick={() => {
                  setOpenSidebar(!openSidebar);
                  downloadCV();
                }}
                className="download-cv"
              >
                Download cv
              </button>
            </li>
            <li>
              <a href="/#contact" className="nav-link" onClick={open_sidebar}>
                Contact me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
