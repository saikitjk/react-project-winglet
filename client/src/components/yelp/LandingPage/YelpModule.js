import React from "react";
import "./style.css";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import SearchSuggestion from "../LandingPage/SearchSuggestion/SearchSuggestion";
import Search from "../Search/Search";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";

import "bulma/css/bulma.css";

export default function YelpModule() {
  const history = useHistory();

  function search(term, location) {
    //encodeURI to avoid space in search term
    const urlEncodedTerm = encodeURI(term);
    const urlEncodedLocation = encodeURI(location);
    // const goToURL = `/home/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`;
    // return goToURL;
    history.push(
      `/home/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`
    );
  }

  return (
    <>
      <div className="searchArea">
        <div className="row navRow">
          <NavBar />
        </div>
        <SearchBar search={search} />
      </div>

      <Route path="/home" component={Search} />
    </>
  );
}

// function search(term, location) {
//     //encodeURI to avoid space in search term
//     var flag = "";
//     const urlEncodedTerm = encodeURI(term);
//     const urlEncodedLocation = encodeURI(location);
//     console.log("hihi" + term);
//     // if (term === undefined && location === undefined) {
//     //   flag = false;
//     // } else if (typeof term === "string" && typeof term === "string") {
//     //   flag = true;
//     // }
//     // return flag;
//     return term !== undefined && location !== undefined ? "go" : "noGo";
//     // const goToURL = `/home/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`;
//     // return goToURL;
//     // history.push(
//     //   `/home/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`
//     // );
//   }
//   var flag2 = search();
//   console.log("ggloc 2 " + flag2);

//   return (
//     <>
//       <div className="searchArea">
//         <div className="row navRow">
//           <NavBar />
//         </div>
//         <SearchBar search={search} />
//       </div>
//       <div>{flag2 === "go" ? <Search /> : <div>gg</div>}</div>
//     </>
//   );
// }
