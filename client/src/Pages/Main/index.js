import React from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import "./style.css";


export function Main() {
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
                About
              </p>
            </a>
            
            {/* <a onClick={() => history.push('/bookings') }>Bookings</a> */}
            <a href="/bookings">
              <p id="menuText" className="navbar-text navbar-right">
                View Bookings
              </p>
            </a>
            <a href="#">
              <p id="menuText" className="navbar-text navbar-right">
                Quotes
              </p>
            </a>
            <button 
            className="btn btn-default logoutBtn" type="button" onClick={logOut}>
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
                <div className="intro-message">
                  <h1 className="animated slideInLeft">
                    Finding the perfect Trade, made{" "}
                    <span className="highlight">simple</span>.
                  </h1>
                  <h3 className="animated slideInRight">
                    Explore your options.
                  </h3>

                  <ul className="list-inline intro-social-buttons">
                    <li>
                      <a href="#">
                        <button className="button animated bounceInUp btn btn-info btn-lg">
                          {" "}
                          <span className="network-name">View Bookings</span>
                        </button>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <button className="button2 animated bounceInUp btn btn-info btn-lg">
                          {" "}
                          <span className="network-name">Pending Quotes</span>
                        </button>
                      </a>
                    </li>
                  </ul>

                  <h4 className="learn animated bounceInUp">About</h4>
                  <i className="arrow animated infinite pulse fa fa-angle-down icon fa-5x"></i>
                </div>
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
