import React from "react";
import OneResultOBJ from "./OneResultObj";
import "./results.css";

export default function Results(props) {
  console.log(props.businesses);
  if (!props.businesses || !props.businesses.length) {
    return <div></div>;
  }

  const searchResults = props.businesses.map((b) => (
    <OneResultOBJ key={b.id} business={b} />
  ));
  return <div className="resultList">{searchResults}</div>;
}
