import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import NavLinks from "../../../util/NavLinks";
import axios from "axios";
import FileDownload from "js-file-download";
import Logo from "../../../assets/brand/logo.png";
import Button from "../Button/Button";

import "./Navbar.css";

export default function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false);

  function open_sidebar() {
    setOpenSidebar(!openSidebar);
  }

  // Sends request to backend to download cv
  function downloadCV() {
    axios({
      url: `${process.env.REACT_APP_DOWNLOAD_DOMAIN}CV.pdf`,
      method: "GET",
      responseType: "blob",
    }).then((response) => {
      FileDownload(response.data, "CV.pdf");
    });
  }

  return (
    <nav>
      <div className="navbar-container flex">
        {/* Normal navbar */}
        <Link to="/">
          <img src={Logo} alt="Brand logo" width="75px" />
        </Link>
        <ul className="nav-links">
          {NavLinks.map((navItem, index) => {
            return (
              <li key={index}>
                <NavLink to={navItem.to} exact activeClassName="nav-link-active" className="nav-link">
                  {navItem.title}
                </NavLink>
              </li>
            );
          })}
          <li>
            <button onClick={downloadCV} className="download-cv nav-link">
              Download cv
            </button>
          </li>
          <li>
            <Button className="nav-link">
              <a href="/#contact">Contact me</a>
            </Button>
          </li>
        </ul>
        {/* Sidebar stuff */}
        <button className="hamburger" onClick={open_sidebar}>
          <i className="fas fa-bars"></i>
        </button>
        <div
          className="sidebar-overlay"
          style={openSidebar ? { opacity: "100", zIndex: "2", pointerEvents: "all" } : {}}
          onClick={open_sidebar}
        ></div>
        <div className="sidebar" style={openSidebar ? { transform: "translateX(-250px)" } : { transform: "translateX(0)" }}>
          <button onClick={open_sidebar} className="sidebar-hamburger">
            <i className="fas fa-times"></i>
          </button>
          <ul>
            {NavLinks.map((navItem, index) => {
              return (
                <li key={index}>
                  <NavLink to={navItem.to} exact activeClassName="nav-link-active" className="nav-link" onClick={open_sidebar}>
                    {navItem.title}
                  </NavLink>
                </li>
              );
            })}
            <li>
              <button
                onClick={() => {
                  setOpenSidebar(!openSidebar);
                  downloadCV();
                }}
                className="download-cv nav-link"
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
