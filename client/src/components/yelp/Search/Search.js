import React from "react";
import Result from "../Search/SearchResultSummary/Result";
import "./search.css";

export default function Search() {
  return (
    <>
      <div className="container searchContainer">
        <div className="row searchTitleRow">
          <h1 className="subTitle">
            <strong>burgers </strong> in seattle
          </h1>
          <p>showing 1-20 our of 600 results</p>
        </div>

        <h4>Search Result Summary</h4>

        <Result />
      </div>
    </>
  );
}
