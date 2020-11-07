import React from "react";
import "./style.css";

export default function errorMessage(errProps) {
  return (
    <div className="errorMessage">
      <span>{errProps.errorMessage}</span>
      <button
        type="button"
        class="btn btn-outline-dark closeButton"
        onClick={errProps.clearError}
      >
        X
      </button>
    </div>
  );
}
