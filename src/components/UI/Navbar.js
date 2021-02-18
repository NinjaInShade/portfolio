import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

import Logo from "../../assets/brand/logo.png";
import Button from "./Button";

export default function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false);

  function open_sidebar() {
    setOpenSidebar(!openSidebar);
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
            <NavLink to="/download_cv" exact activeClassName="nav-link-active" className="nav-link underline">
              Download cv
            </NavLink>
          </li>
          <li>
            <Button>
              <a href="/#contact">Contact me</a>
            </Button>
          </li>
        </ul>
        <button className="hamburger" onClick={open_sidebar}>
          <i className="fas fa-bars"></i>
        </button>
        <div className="sidebar-overlay" style={openSidebar ? { opacity: "100", zIndex: "2" } : {}}></div>
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
              <NavLink to="/download_cv" exact activeClassName="nav-link-active" className="nav-link underline">
                Download cv
              </NavLink>
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
