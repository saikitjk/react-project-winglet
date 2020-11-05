import React from "react";
import "./style.css";

export default function musicgenre(props) {
    return (
      <>
      <strong>What Do You Like To Listen To?</strong>
        <div class="form-group col-md-4">
            <label for="inputGender">Genre</label>
            <select id="inputGender" class="form-control">
                <option selected>Select One</option>
                <option>Rock</option>
                <option>Hip-Hop</option>
                <option>Pop</option>
                <option>Country</option>
                <option>House</option>
                <option>Folk</option>
                <option>Pop-Rock</option>
            </select>
        </div>
      </>
    );
  }