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

      <BrowserRouter>
        <Switch>
          <Route path="/home/search" component={Search} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

// {props.identifier === "search" ? (
//     <div className="row">
//       <div className="col">
//         <button
//           onClick={() => props.onBookSave(book, index)}
//           className="btn btn-outline-secondary"
//           type="button"
//         >
//           <span>Save Book</span>
//         </button>
//       </div>
//       <div className="col checksaved"></div>
//       <div className="col msgText">
//         {book.saved ? "Book Saved" : ""}
//       </div>
//       <div className="col">
//         <CheckSaved rendered={book.saved} />
//       </div>
//     </div>
//   ) : (
//     <button
//       onClick={(e) => props.onDelete(book._id)}
//       className="btn btn-outline-secondary"
//       type="button"
//     >
//       Delete
//     </button>
//   )}
