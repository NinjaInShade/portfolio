import React from "react";
import Zoom from "react-reveal/Fade";

import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container flex">
        <Zoom>
          <div className="credit flex">
            <h3 className="header">Credit</h3>
            <ul>
              <li>
                <a href="https://bgjar.com" target="_blank" rel="noreferrer" className="lead">
                  https://bgjar.com
                </a>
              </li>
              <li>
                <a href="https://fontawesome.com" target="_blank" rel="noreferrer" className="lead">
                  https://fontawesome.com
                </a>
              </li>
              <li>
                <p className="lead">© Leon Michalak 2021</p>
              </li>
            </ul>
          </div>
        </Zoom>
        <Zoom>
          <div className="contact flex">
            <h3 className="header">Contact</h3>
            <ul>
              <li>
                <div className="flex">
                  <i className="fas fa-phone-alt lead contact-icon"></i>
                  <p className="lead">07498 610586</p>
                </div>
              </li>
              <li>
                <div className="flex">
                  <i className="fas fa-envelope lead contact-icon"></i>
                  <a href="mailto:leonmichalak6@gmail.com" className="lead">
                    leonmichalak6@gmail.com
                  </a>
                </div>
              </li>
              <li>
                <div className="flex">
                  <span className="iconify lead contact-icon" data-inline="false" data-icon="ls:web"></span>
                  <a href="https://leonmichalak.tech" className="lead">
                    https://leonmichalak.tech
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </Zoom>
        <Zoom>
          <div className="media flex">
            <h3 className="header">Media</h3>
            <ul className="flex">
              <li>
                <a href="https://github.com/NinjaInShade" target="_blank" rel="noreferrer">
                  <i className="fab fa-github-square lead media-icon"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/LeonMichalak" target="_blank" rel="noreferrer">
                  <i className="fab fa-twitter-square lead media-icon"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/leonmichalak/" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin lead media-icon"></i>
                </a>
              </li>
            </ul>
          </div>
        </Zoom>
      </div>
      <div className="bg"></div>
    </footer>
  );
}
