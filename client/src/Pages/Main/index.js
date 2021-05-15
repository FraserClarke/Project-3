import React from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import "./style.css"

export function Main() {
  const history = useHistory();
  function logOut() {
    API.userLogout();
    history.go(0); // refreshes the page, but we could push them back to login page
  }

  return (
    <div>
      You're logged in!
      <button type="button" onClick={logOut}>
        Logout
      </button>
      <div className="start">
        <header>
          <nav className="navigation navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">
                  <h1 className="brand-title"> Country Home </h1>
                </a>
              </div>
              <a href="#">
                {" "}
                <p id="menuText" className="navbar-text navbar-right">
                  Our Story
                </p>
              </a>

              <a href="#">
                <p id="menuText" className="navbar-text navbar-right">
                  Agents
                </p>
              </a>
              <a href="#">
                <p id="menuText" className="navbar-text navbar-right">
                  Listings
                </p>
              </a>
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
                      Finding the perfect home, made{" "}
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
                            <span className="network-name">
                              View Nearby Listings
                            </span>
                          </button>
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          <button className="button2 animated bounceInUp btn btn-info btn-lg">
                            {" "}
                            <span className="network-name">
                              Contact an Agent
                            </span>
                          </button>
                        </a>
                      </li>
                    </ul>

                    <h4 className="learn animated bounceInUp">
                      About Our Agency
                    </h4>
                    <i className="arrow animated infinite pulse fa fa-angle-down icon fa-5x"></i>
                  </div>
                </div>
                <div className="col-lg-4"></div>
              </div>
            </div>
          </div>
        </body>
      </div>
    </div>
  );
}
