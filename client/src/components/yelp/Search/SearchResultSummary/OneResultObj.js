import React from "react";
import "./oneResultObj.css";

export default function OneResultObj() {
  return (
    <div className="oneResultOBJ">
      <img src="http://via.placeholder.com/150" alt="business" />
      <div clasName="busInfo">
        <h2 className="subtitle"> burger place</h2>
        <p>rating</p>
        <p>
          $$ <span class="tag">Tag label</span>
        </p>
      </div>
      <p>address</p>
    </div>
  );
}
