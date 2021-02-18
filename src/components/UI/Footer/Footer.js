import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container flex">
        <div>
          <h3>Credit</h3>
          <ul>
            <li>https://bgjar.com</li>
            <li>https://fontawesome.com</li>
            <li>© Leon Michalak 2021</li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
        </div>
        <div>
          <h3>Media</h3>
        </div>
      </div>
      <div className="bg"></div>
    </footer>
  );
}
