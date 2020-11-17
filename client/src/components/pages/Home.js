import React, { useEffect, useContext, useState } from "react";

import "./homeStyle.css";
import UserContext from "../context/UserContext";
import SpotifyModule from "../spotify/SpotifyModule";
import YelpModule from "../yelp/LandingPage/YelpModule";

import LandingPage from "./LandingPage"; //welcome page
require("dotenv").config();

export default function Home() {
  const { userData } = useContext(UserContext);
  console.log("This is userdata " + JSON.stringify(userData.user));
  return (
    <>
      {userData.user ? (
        <div className="container homeContainer">
          <div className="row homieRow">
            <div className="col-lg-6 spotifyModule">
              <SpotifyModule />
            </div>
            <div className="col-lg-6 yelpModule">
              <YelpModule />
            </div>
          </div>
        </div>
      ) : (
        <LandingPage />
      )}
    </>
  );
}
