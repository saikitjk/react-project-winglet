import React from "react";
import "./oneResultObj.css";
import Rating from "../../Rating/Rating";

export default function OneResultObj(props) {
  console.log(props.business);
  if (!props.business) {
    return <div></div>;
  }
  const pb = props.business;
  const tags = pb.categories.map((category) => (
    <span className="tag businessTag" key={pb.id + category.title}>
      {category.title}
    </span>
  ));
  return (
    <div className="oneResultOBJ">
      <div className=" col-3 busPic">
        <img src={pb.image_url} alt="business" />
      </div>
      <div className="col-5 busInfo">
        <h2 className="subtitle"> {pb.name}</h2>
        <Rating reviewCount={pb.review_count} rating={pb.rating} />
        <p>
          {pb.price} <span className="tag">{tags}</span>{" "}
        </p>
        <p>{pb.is_closed}</p>
      </div>
      <div className=" col-4 busContact">
        <p>{pb.phone}</p>
        <p>{pb.location.address1}</p>
        <p>
          {pb.location.state}, {pb.location.zip_code}
        </p>
        <p>{pb.location.country}</p>
      </div>
    </div>
  );
}
