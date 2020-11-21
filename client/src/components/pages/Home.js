import React, { useEffect, useContext, useState } from "react";

import "./homeStyle.css";
import UserContext from "../context/UserContext";
import SpotifyModule from "../spotify/SpotifyModule";
import YelpModule from "../yelp/LandingPage/YelpModule";
import MapModule from "../EventMap/MapModule";

import LandingPage from "./LandingPage"; //welcome page
require("dotenv").config();

export default function Home() {
  const { userData } = useContext(UserContext);
  console.log("This is userdata " + JSON.stringify(userData.user));

  return (
    <>
      {userData.user ? (
        <div className="container homeContainer">
          <div className="row homeMainRow">
            <div className="col-lg-6 homieCol">
              <div className="row spotifyRow">
                <div className="col-lg-12 spotifyModule">
                  <SpotifyModule />
                </div>
              </div>
              <div className="row mapRow">
                <div className="col-lg-12 mapModule">
                  <MapModule />
                </div>
              </div>
            </div>

            <div className="col-lg-6 homieCol">
              <div className="col-lg-12 yelpModule">
                <YelpModule />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LandingPage />
      )}
    </>
  );
}
