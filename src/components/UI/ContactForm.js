import React, { useState } from "react";
import Button from "./Button";
import { sanitizeData, minMaxLength, isEmail } from "../../util/validation";

import "./ContactForm.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({
    name: "default",
    email: "default",
    message: "default",
  });

  const updated_errors = { ...errors };

  function validateName(e) {
    setName(e.target.value);

    const sanitized_data = sanitizeData([e.target.value]);
    updated_errors.name = minMaxLength(sanitized_data[0], 1, 15);

    setErrors(updated_errors);
  }

  function validateEmail(e) {
    setEmail(e.target.value);

    const sanitized_data = sanitizeData([e.target.value]);
    updated_errors.email = minMaxLength(sanitized_data[0], 1, undefined);
    updated_errors.email = isEmail(sanitized_data[0]);

    setErrors(updated_errors);
  }

  function validateMessage(e) {
    setMessage(e.target.value);

    const sanitized_data = sanitizeData([e.target.value]);
    updated_errors.message = minMaxLength(sanitized_data[0], 1, 120);

    setErrors(updated_errors);
  }

  function submitForm(e) {
    e.preventDefault();
    const sanitized_data = sanitizeData([name, email, message]);
    // Empty checks
    updated_errors.name = minMaxLength(sanitized_data[0], 1, undefined);
    updated_errors.email = minMaxLength(sanitized_data[1], 1, undefined);
    updated_errors.message = minMaxLength(sanitized_data[2], 1, undefined);

    setErrors(updated_errors);

    if (errors.name === "default" && errors.email === "default" && errors.message === "default") {
      if (name !== "" && email !== "" && message !== "") {
        setName("");
        setEmail("");
        setMessage("");
        return console.log("Valid");
      } else {
        return;
      }
    } else {
      return;
    }
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
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="John Doe"
                value={name}
                onChange={(e) => validateName(e)}
                style={errors.name !== "default" ? { borderBottom: "2px solid #FF0001" } : {}}
              />
              <p className="error-text" style={errors.name === "default" ? { visibility: "hidden" } : {}}>
                {errors.name}
              </p>
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
                onChange={(e) => validateEmail(e)}
                style={errors.email !== "default" ? { borderBottom: "2px solid #FF0001" } : {}}
              />
              <p className="error-text" style={errors.email === "default" ? { visibility: "hidden" } : {}}>
                {errors.email}
              </p>
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
              onChange={(e) => validateMessage(e)}
              style={errors.message !== "default" ? { borderBottom: "2px solid #FF0001" } : {}}
            />
            <p className="error-text" style={errors.message === "default" ? { visibility: "hidden" } : {}}>
              {errors.message}
            </p>
          </div>
          <Button className="flex" type="submit" onClick={(e) => submitForm(e)}>
            {/* <i className="fas fa-phone-alt"></i> */}
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M29.1668 5.83325H8.75016C7.14162 5.83325 5.8335 7.14138 5.8335 8.74992V16.0416H8.75016V11.6666L18.0835 18.6666C18.336 18.8557 18.643 18.9579 18.9585 18.9579C19.274 18.9579 19.581 18.8557 19.8335 18.6666L29.1668 11.6666V24.7916H17.5002V27.7083H29.1668C30.7754 27.7083 32.0835 26.4001 32.0835 24.7916V8.74992C32.0835 7.14138 30.7754 5.83325 29.1668 5.83325ZM18.9585 15.677L9.72141 8.74992H28.1956L18.9585 15.677Z"
                fill="white"
              />
              <path
                d="M2.9165 17.5H13.1248V20.4167H2.9165V17.5ZM5.83317 21.875H14.5832V24.7917H5.83317V21.875ZM10.2082 26.25H16.0415V29.1667H10.2082V26.25Z"
                fill="white"
              />
            </svg>

            <p>Send mail</p>
          </Button>
        </form>
      </div>
      <div className="home-contact-bg"></div>
      <div className="home-contact-wave"></div>
    </section>
  );
}
