import React from "react";
import "./style.css";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import SearchSuggestion from "../LandingPage/SearchSuggestion/SearchSuggestion";
import Search from "../Search/Search";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "bulma/css/bulma.css";

export default function YelpModule() {
  return (
    <>
      <div className="searchArea">
        <div className="row navRow">
          <NavBar />
        </div>
        <SearchBar />
      </div>
      <SearchSuggestion />

      <BrowserRouter>
        <Switch>
          <Route path="/home/search" component={Search} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
