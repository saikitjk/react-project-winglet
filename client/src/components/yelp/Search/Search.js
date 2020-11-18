import React from "react";
import Results from "../Search/SearchResultSummary/Results";
import "./search.css";
import { useLocation } from "react-router-dom";
import useBusSearch from "../../../utils/useBusSearch";

export default function Search() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const term = params.get("find_desc");
  const locationParam = params.get("find_loc");
  const [
    businesses,
    amountResults,
    searchParams,
    setSearchParams,
  ] = useBusSearch(term, locationParam);

  return (
    <div className="container searchContainer">
      <div className="row searchTitleRow">
        <h1 className="subTitle">
          <strong>{term} </strong> {locationParam}
        </h1>
        <p>showing 1-20 our of 600 results</p>
      </div>

      <h4>Search Result:</h4>

      <Results businesses={businesses} />
    </div>
  );
}
