import "./App.css";
import React, { useEffect, useContext, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Header from "./components/layout/Header";
import Question from "./components/pages/Questionnaire/Question";
import UserContext from "./components/context/UserContext";
import LandingPage from "./components/pages/LandingPage";
import Axios from "axios";
//import { useHistory } from "react-router-dom";

function App() {
  //const history = useHistory();

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLogin = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:8080/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      console.log("check if token exist " + tokenRes.data);
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:8080/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkLogin();
  }, []);
  return (
    //homepage
    //header always stay
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/home" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/question" component={Question} />
            </Switch>
          </div>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
