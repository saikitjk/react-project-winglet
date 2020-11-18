import React from "react";
import OneResultOBJ from "./OneResultObj";
import "./results.css";

export default function Results(props) {
  if (!props.businesses || !props.businesses.length) {
    return <div></div>;
  }

  const searchResults = props.businesses.map((b) => (
    <OneResultOBJ key={b.id} businesses={b} />
  ));
  return <div className="resultList">{searchResults}</div>;
}
