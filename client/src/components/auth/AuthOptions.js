import React from "react";
import { useHistory } from "react-router-dom";
import "./authOptionStyle.css";

export default function AuthOptions() {
  const history = useHistory();
  const register = () => history.push("/register");
  const login = () => history.push("/login");
  return (
    <div className="auth-option">
      <button
        type="button"
        className="btn btn-outline-dark registerButton"
        onClick={register}
      >
        Register
      </button>
      <button
        type="button"
        className="btn btn-outline-dark loginButton"
        onClick={login}
      >
        Login
      </button>
    </div>
  );
}
