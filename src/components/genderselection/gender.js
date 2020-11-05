import React from "react";
import "./style.css";

export default function gender(props) {
    return (
      <>
      <strong>Select Your Gender</strong>
        <div class="form-group col-md-4">
            <label for="inputGender">Gender</label>
            <select id="inputGender" class="form-control">
                <option selected>Select One</option>
                <option>Male</option>
                <option>Female</option>
            </select>
        </div>
      </>
    );
  }