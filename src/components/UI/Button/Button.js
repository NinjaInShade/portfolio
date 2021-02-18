import React from "react";
import "./Button.css";

export default function Button({ children, type, onClick, className }) {
  return (
    <button onClick={onClick} className={`btn ${className}`} type={type}>
      {children}
    </button>
  );
}
