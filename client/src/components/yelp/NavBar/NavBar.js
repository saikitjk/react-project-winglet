import React from "react";
import "./style.css";
import YelpLogo from "../../assets/images/yelpLogo.png";

export default function NavBar() {
  return (
    <div className="yelpLogo">
      <img src={YelpLogo} className="Belb" alt="Yelp Logo" />
    </div>
  );
}
