import React, { useEffect, useContext } from "react";
import "./homeStyle.css";
import UserContext from "../context/UserContext";
import { useHistory } from "react-router-dom";

export default function Home() {
  //use userContext as data source
  const { userData } = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {
    if (!userData.user) history.push("./login");
  }, [userData]); //put userdata so logout will know
  return <div className="homePage">home</div>;
}
