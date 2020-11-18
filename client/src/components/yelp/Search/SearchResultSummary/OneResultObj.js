import React from "react";
import "./oneResultObj.css";
import Rating from "../../Rating/Rating";

export default function OneResultObj() {
  return (
    <div className="oneResultOBJ">
      <div className=" col-3 busPic">
        <img src="http://via.placeholder.com/150" alt="business" />
      </div>
      <div className="col-6 busInfo">
        <h2 className="subtitle"> burger place</h2>
        <Rating />
        <p>
          $$ <span className="tag">burger</span>{" "}
          <span class="tag">fast food</span>
        </p>
      </div>
      <div className=" col-3 busContact">
        <p>111-222-3333</p>
        <p>street</p>
        <p>city</p>
      </div>
    </div>
  );
}
