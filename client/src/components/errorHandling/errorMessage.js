import React from "react";
import "./style.css";

export default function errorMessage(errProps) {
  return (
    <div className="errorMessage">
      <span>{errProps.errorMessage}</span>
      <button className="closeButton" onClick={errProps.clearError}>
        x
      </button>
    </div>
  );
}
