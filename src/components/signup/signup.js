import React from "react";
import "./style.css";

export default function signUp(props) {
    return (
      <>
        <strong>Basic Info</strong>
        <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">First Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter First Name">
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput2">Last Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Enter Last Name">
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput3">Email Address</label>
                <input type="email" class="form-control" id="exampleFormControlInput3" placeholder="Enter Email Adress">
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput4">Password</label>
                <input type="password" class="form-control" id="exampleFormControlInput4" placeholder="Enter Password">
            </div>
            <button type="submit" class="btn btn-primary">Next</button>
        </form>
      </>
    );
  }