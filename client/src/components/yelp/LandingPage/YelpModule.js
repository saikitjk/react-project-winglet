import React from "react";
import "./style.css";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import "bulma/css/bulma.css";

export default function YelpModule() {
  return (
    <>
      <div className="row navRow">
        <NavBar />
      </div>
      <SearchBar />
    </>
  );
}
