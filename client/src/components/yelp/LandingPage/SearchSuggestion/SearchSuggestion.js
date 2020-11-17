import React from "react";
import "./style.css";

export default function SearchSuggestion() {
  return (
    <div className="row suggestionRow">
      <span className="icon restarurantIcon is-small">
        <i className="fas fa-utensils"></i>
        <span>Restaurants</span>
      </span>

      <span className="icon nightlifeIcon is-small">
        <i className="fas fa-cocktail"></i>
        <span>Nightlife</span>
      </span>

      <span className="icon serviceIcon is-small">
        <i className="fas fa-concierge-bell"></i>
        <span>Services</span>
      </span>

      <span className="icon deliveryIcon is-small">
        <i className="fas fa-truck"></i>
        <span>Delivery Services</span>
      </span>
    </div>
  );
}
