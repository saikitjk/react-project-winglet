import React from "react";
import "./style.css";
import YelpLogo from "../../assets/images/yelpLogo.png";

export default function NavBar() {
  return (
    <div className="yelpLogo">
      <img src={YelpLogo} className="yelp" alt="Yelp Logo" />
    </div>
  );
}
