import React, { useState } from "react";
import "./style.css";

export default function SearchBar(props) {
  const [term, setTerm] = useState(props.term || "");
  const [location, setLocation] = useState(props.location || "");

  function submit(e) {
    e.preventDefault();
    console.log(term, location);
  }

  return (
    <div className="row searchRow">
      <form onSubmit={submit}>
        <div className="field has-addons">
          <div className="control">
            <div className="button is-static">Search</div>
          </div>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Resturants, bars, shops.."
              onChange={(e) => setTerm(e.target.value)}
            />
          </div>
          <div className="control">
            <div className="button is-static">Near</div>
          </div>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="City"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <button className="button searchButton">
            <span className="icon is-small">
              <i className="fas fa-search"></i>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
