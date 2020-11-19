import React from "react";
import ReactRating from "react-rating";
import "./rating.css";

export default function Rating(props) {
  return (
    <div className="rating">
      <ReactRating
        emptySymbol="far fa-star"
        fullSymbol="fas fa-star"
        fractions={2}
        readonly
        initialRating={props.rating}
      />
      <p>{props.reviewCount} Reviews</p>
    </div>
  );
}
