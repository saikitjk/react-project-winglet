import React, { useContext, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./registerStyle.css";
import UserContext from "../context/UserContext";
import ErrorMessage from "../errorHandling/errorMessage";
import background from './bg.jpg';

export default function Register() {
  const [userName, setUserName] = useState();
  const [userEmail, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [authError, setAuthError] = useState();
  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const newUser = { userEmail, password, confirmPassword, userName };

      await axios.post("http://localhost:8080/users/register", newUser);

      const loginRes = await axios.post("http://localhost:8080/users/login", {
        userEmail,
        password,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });

      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/question");
    } catch (err) {
      //console.log("err = " + err);
      err.response.data.msg && setAuthError(err.response.data.msg);
    }
  };

  return (
    <div className="fullpage">
      <img src={background} alt="Background" className="backGround" />
    <div className="signUpPage">
      <h2>Sign Up</h2>
      <br></br>
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

        <div class="form-group">
          <label htmlFor="inputConfirmPassword">Confirm Password</label>
          <input
            type="password"
            class="form-control"
            id="inputConfirmPassword"
            placeholder="Confirm Password"
            autocomplete="off"
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>
        {authError && (
          <ErrorMessage
            errorMessage={authError}
            clearError={() => setAuthError(undefined)}
          />
        )}

        <button
          type="submit"
          value="Register"
          class="btn submitButton"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}
