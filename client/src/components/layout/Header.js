import React from "react";
import { Link } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";
import "./style.css";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="title">Winglet App </h1>
      </Link>
      <AuthOptions />
    </header>
  );
}
