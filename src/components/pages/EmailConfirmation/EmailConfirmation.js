import React from "react";
import { useLocation, Redirect } from "react-router-dom";

export default function EmailConfirmation(props) {
  let location = useLocation();

  if (location.state === undefined) {
    return <Redirect to="/" />;
  }
  console.log(location.state);

  return (
    <div>
      <h1>EMAIL CONFIRMATION</h1>
    </div>
  );
}
