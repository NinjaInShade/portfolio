import React from "react";
import Zoom from "react-reveal/Fade";

import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container flex">
        <Zoom>
          <div className="credit flex">
            <h3>Credit</h3>
            <ul>
              <li>
                <a href="https://bgjar.com" target="_blank" rel="noreferrer">
                  https://bgjar.com
                </a>
              </li>
              <li>
                <a href="https://fontawesome.com" target="_blank" rel="noreferrer">
                  https://fontawesome.com
                </a>
              </li>
              <li>© Leon Michalak 2021</li>
            </ul>
          </div>
        </Zoom>
        <Zoom>
          <div className="contact flex">
            <h3>Contact</h3>
            <ul>
              <li>
                <div className="flex">
                  <i className="fas fa-phone-alt"></i>
                  <p>07498 610586</p>
                </div>
              </li>
              <li>
                <div className="flex">
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:leonmichalak6@gmail.com">leonmichalak6@gmail.com</a>
                </div>
              </li>
              <li>
                <div className="flex">
                  <span className="iconify" data-inline="false" data-icon="ls:web"></span>
                  <a href="https://leonmichalak.tech">https://leonmichalak.tech</a>
                </div>
              </li>
            </ul>
          </div>
        </Zoom>
        <Zoom>
          <div className="media flex">
            <h3>Media</h3>
            <div className="flex">
              <a href="https://github.com/NinjaInShade" target="_blank" rel="noreferrer">
                <i className="fab fa-github-square"></i>
              </a>
              <a href="https://twitter.com/LeonMichalak" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/leonmichalak/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </Zoom>
      </div>
      <div className="bg"></div>
    </footer>
  );
}
