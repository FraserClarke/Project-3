import React from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import "./style.css";
import { Link } from "react-router-dom";
export function Bookings() {
  const history = useHistory();
  function logOut() {
    API.userLogout();
    history.go(0); // refreshes the page, but we could push them back to login page
  }

  return (
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
                About
              </p>
            </a>

            {/* <a onClick={() => history.push('/bookings') }>Bookings</a> */}
            <Link to="/bookings">Bookings</Link>

            <a href="#">
              <p id="menuText" className="navbar-text navbar-right">
                Quotes
              </p>
            </a>
            <button
              className="btn btn-default logoutBtn"
              type="button"
              onClick={logOut}
            >
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
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <label for="start">Start date:</label>

                <input
                  type="date"
                  id="start"
                  name="trip-start"
                  value="2018-07-22"
                  min="2018-01-01"
                  max="2018-12-31"
                ></input>
              </div>
              <div className="col-lg-4"></div>
            </div>
          </div>
        </div>
      </body>
    </div>
    //</div>
  );
}
