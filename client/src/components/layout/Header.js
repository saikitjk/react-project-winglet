import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";
import UserContext from "../context/UserContext";
import "./style.css";

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
          <h1 className="title" onClick={refreshpage}>
            Winglet App{" "}
          </h1>
        </Link>
      ) : (
        <Link to="/">
          <h1 className="title">Winglet App </h1>
        </Link>
      )}
      <AuthOptions />
    </header>
  );
}
