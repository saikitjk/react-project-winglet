import React from "react";
import { Link } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";
import "./style.css";

export default function Header() {
  return (
    <header class="header">
      <Link to="/">
        <h1 class="title">Winglet App </h1>
      </Link>
      <AuthOptions />
    </header>
  );
}
