import React from "react";
import spotifyLogo from "../assets/images/spotifyLogo.png";
import "./style.css";

export default function Nav() {
  return (
    <div className="spotifyLogo">
      <img src={spotifyLogo} className="spotify" alt="Spotify Logo" />
    </div>
  );
}
