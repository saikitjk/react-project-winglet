import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";
import UserContext from "../context/UserContext";
import "./style.css";


export default function Footer() {
    //check if token exist so it can be use to
    //determine what to show user (logged in vs not)_
    const { userData } = useContext(UserContext);
  
    function refreshpage() {
      window.location.reload();
    }
  
    return (
      <footer className="footer">
        <h2>
            Made By The Dreamteam
        </h2>
      </footer>
    );
  }
  