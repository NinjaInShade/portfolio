import React from "react";
import "./Button.css";

export default function Button({ children, onClick, className }) {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {children}
    </button>
  );
}
