import React from "react";
import { useLocation, Redirect } from "react-router-dom";

import "./EmailConfirmation.css";

export default function EmailConfirmation(props) {
  let location = useLocation();

  if (location.state === undefined) {
    return <Redirect to="/" />;
  }
  console.log(location.state);

  return (
    <section className="email flex">
      <div>
        <h1>Email {location.state.successfull ? "successfully" : "unsuccessfully"} sent.</h1>
        <h2>This is a temporary page whilst the later page is being designed.</h2>
      </div>
    </section>
  );
}
