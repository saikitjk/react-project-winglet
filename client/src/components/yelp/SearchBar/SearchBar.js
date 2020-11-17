import React from "react";
import "./style.css";

export default function SearchBar() {
  return (
    <div className="row searchRow">
      <div className="field has-addons">
        <p className="control">
          <button className="button is-static">Search</button>
        </p>
        <p className="control">
          <input
            className="input"
            type="text"
            placeholder="Resturants, bars, shops.."
          />
        </p>
        <p className="control">
          <button className="button is-static">Near</button>
        </p>
        <p className="control">
          <input className="input" type="text" placeholder="City" />
        </p>
        <button className="button searchButton">
          <span className="icon is-small">
            <i className="fas fa-search"></i>
          </span>
        </button>
      </div>
    </div>
  );
}
