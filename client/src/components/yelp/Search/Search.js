import React from "react";
import Results from "../Search/SearchResultSummary/Results";
import "./search.css";
import { useLocation } from "react-router-dom";
import useBusSearch from "../../../utils/useBusSearch";

export default function Search(props) {
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

  let resultStats = null;
  if (amountResults && businesses.length) {
    resultStats = (
      <p>
        Showing 1-{businesses.length} out of {amountResults} results
      </p>
    );
  }

  return (
    <div className="container searchContainer">
      <div className="row searchTitleRow">
        <h1 className="subTitle">
          <strong>{term} </strong> {locationParam}
        </h1>

        <p>{resultStats}</p>
      </div>

      <h4>Search Result:</h4>

      <Results businesses={businesses} />
    </div>
  );
}
