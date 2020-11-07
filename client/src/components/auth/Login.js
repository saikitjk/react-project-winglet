import React, { useContext, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./loginStyle.css";
import UserContext from "../context/UserContext";

export default function Login() {
  const [userEmail, setEmail] = useState();
  const [password, setPassword] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { userEmail, password };

      const loginObj = await axios.post(
        "http://localhost:8080/users/login",
        loginUser
      );
      setUserData({
        token: loginObj.data.token,
        user: loginObj.data.user,
      });

      localStorage.setItem("auth-token", loginObj.data.token);
      history.push("/");
    } catch (err) {
      console.log("err = " + err);
    }
  };

  return (
    <div className="loginPage">
      <h2>Login</h2>
      <form onSubmit={submit}>
        <div class="form-group">
          <label htmlFor="inputEmail">Email address</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            autocomplete="off"
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
            autocomplete="off"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <button type="submit" value="Login" class="btn btn-outline-dark">
          Login
        </button>
      </form>
    </div>
  );
}
