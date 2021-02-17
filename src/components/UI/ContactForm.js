import React, { useState } from "react";
import Button from "./Button";

import "./ContactForm.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function submitForm(e) {
    e.preventDefault();
  }

  return (
    <section className="home-contact flex" id="contact">
      <div className="home-contact-container flex">
        <div className="home-contact-text flex">
          <h2 className="home-contact-header">Get in touch</h2>
          <p className="home-contact-lead">You can contact me for a project proposition or for any questions</p>
          <div className="home-contact-media-container">
            <div className="home-contact-media flex">
              <i className="fas fa-phone-alt"></i>
              <p>07498 610586</p>
            </div>
            <div className="home-contact-media flex">
              <i className="fas fa-envelope"></i>
              <p>leonmichalak6@gmail.com</p>
            </div>
          </div>
        </div>
        <form className="home-contact-form">
          <div className="home-contact-form-top flex">
            <div className="home-contact-input-wrapper flex">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="home-contact-input-wrapper flex">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="home-contact-input-wrapper flex">
            <label htmlFor="message">Message</label>
            <input
              type="text"
              name="message"
              id="message"
              required
              placeholder="Hi there..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <Button className="flex" type="submit" onClick={(e) => submitForm(e)}>
            <i className="fas fa-phone-alt"></i>
            <p>Send mail</p>
          </Button>
        </form>
      </div>
      <div className="home-contact-bg"></div>
      <div className="home-contact-wave"></div>
    </section>
  );
}
