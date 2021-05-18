import React from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
// import "./style.css";

export function Bookings() {
  const history = useHistory();
  function logOut() {
    API.userLogout();
    history.go(0); // refreshes the page, but we could push them back to login page
  }

  return (
    // <div>
    //   You're logged in!

    <div className="start">
      <header>
        <nav className="navigation navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                <h1 className="brand-title"> Tradie Tracker </h1>
              </a>
            </div>
            <a href="#">
              {" "}
              <p id="menuText" className="navbar-text navbar-right">
                Our Story
              </p>
            </a>

            <a href="/bookings">
              <p id="menuText" className="navbar-text navbar-right">
                Bookings
              </p>
            </a>
            <a href="#">
              <p id="menuText" className="navbar-text navbar-right">
                Listings
              </p>
            </a>
            <button className="btn btn-default" type="button" onClick={logOut}>
              Logout
            </button>
            <i
              id="search"
              className="navbar-text navbar-right fa fa-search fa-2x"
            ></i>
          </div>
        </nav>
      </header>
      <body>
        <div className="intro-header">
          <div className="container"></div>
          Hello
        </div>
      </body>
    </div>
  );
}
