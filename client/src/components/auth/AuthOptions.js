import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";
import "./authOptionStyle.css";

export default function AuthOptions() {
  const { userData, setUserData } = useContext(UserContext);

  const history = useHistory();
  const register = () => history.push("/register");
  const login = () => history.push("/login");
  //remove user token if logout
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
    login();
  };
  return (
    <nav className="auth-option">
      {userData.user ? (
        <button type="button" className="logoutButton" onClick={logout}>
          Logout
        </button>
      ) : (
        <>
          <button type="button" className="registerButton" onClick={register}>
            Sign Up
          </button>

          <button type="button" className="loginButton" onClick={login}>
            Login
          </button>
        </>
      )}
    </nav>
  );
}
