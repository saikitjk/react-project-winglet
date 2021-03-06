import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";
import UserContext from "../context/UserContext";
import "./style.css";
import logo from "./winglet.png";

export default function Header() {
  //check if token exist so it can be use to
  //determine what to show user (logged in vs not)_
  const { userData } = useContext(UserContext);

  function refreshpage() {
    window.location.reload();
  }

  return (
    <header className="header">
      {userData.user ? (
        <Link to="/home">
          <img src={logo} onClick={refreshpage} alt="Logo" className="logo" />
        </Link>
      ) : (
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      )}
      <AuthOptions />
    </header>
  );
}
