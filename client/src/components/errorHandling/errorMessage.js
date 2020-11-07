import React from "react";
import "./style.css";

export default function errorMessage(errProps) {
  return (
    <div className="errorMessage">
      <span>{errProps.errorMessage}</span>
      <button onClick={errProps.clearError}></button>
    </div>
  );
}
