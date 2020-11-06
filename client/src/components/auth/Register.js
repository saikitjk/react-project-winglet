import React, { useContext, useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import "./registerStyle.css";
import UserContext from "../context/UserContext";

export default function Register() {
  const [userName, setUserName] = useState();
  const [userEmail, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const history = useHistory();
  const { setUserData } = useContext(UserContext);

  const submit = async (e) => {
    e.prventDefault();
    const newUser = { userName, userEmail, password, confirmPassword };
    await Axios.post("http://localhost:8080/users/register", newUser);
    const loginRes = await Axios.post("http://localhost:8080/users/login", {
      userEmail,
      password,
    });
    setUserData({
      token: loginRes.data.token,
      user: loginRes.data.user,
    });
    localStorage.setItem("auth-token", loginRes.data.token);
    history.push("/");
  };

  return (
    <>
      <div className="signUpPage">
        <h2>Sign Up</h2>
        <form onSubmit={submit}>
          <div class="form-group">
            <label htmlFor="inputUsername">Username</label>
            <input
              type="text"
              class="form-control"
              id="userName"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>
          <div class="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else. Hehe
            </small>
          </div>

          <div class="form-group">
            <label htmlFor="inputPassword">Password</label>
            <input
              type="password"
              class="form-control"
              id="inputPassword"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>

          <div class="form-group">
            <label htmlFor="inputConfirmPassword">Confirm Password</label>
            <input
              type="password"
              class="form-control"
              id="inputConfirmPassword"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
          </div>

          <button type="submit" value="Register" class="btn btn-outline-dark">
            Submit
          </button>
        </form>
      </div>
      ;
    </>
  );
}
