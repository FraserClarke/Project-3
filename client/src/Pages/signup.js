import React, { useState } from "react";
// import Container from "../../components/Container";
// import Col from "../../components/Col";
// import Nav from "../Components/NavSignLogin";
import "bootstrap/dist/css/bootstrap.min.css";

function Signup() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState();
  const [ownersTrade, setOwnersTrade] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("username is " + username);
    console.log("password is " + password);
    console.log("First name is " + firstName);
    console.log("last name is " + lastName);
    console.log("Phone Number is " + phoneNumber);
    console.log("Addresss is " + address);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h2>Sign Up Form</h2>
          <form onSubmit={handleSubmit} className="signup">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="firstName"
                className="form-control"
                id="firstName-input"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="lastName"
                className="form-control"
                id="lastName-input"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="phoneNumber"
                className="form-control"
                id="phoneNumber-input"
                placeholder="Phone Number"
                onChange={(e) => setPhoneNumber(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="address"
                className="form-control"
                id="address-input"
                placeholder="Phone Number"
                onChange={(e) => setAddress(e.target.value)}
              ></input>
            </div>

            {/* IF BUSINESS OWNER */}
            {/* ----------------------------------------------- */}
            <div className="form-group">
              
              <label htmlFor="ownersTrade">
                Please Select the Trade that applies to you
              </label>{" "}
              <div className="btn-group">
                <button
                  className="btn btn-secondary btn-sm dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Select Trade
                </button>
                <div className="dropdown-menu">
                  {" "}
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
              <input
                type="ownersTrade"
                className="form-control"
                id="ownersTrade-input"
                placeholder="ownersTrade"
                onChange={(e) => setOwnersTrade(e.target.value)}
              ></input>
            </div>

            {/* IF BUSINESS OWNER */}
            {/* ----------------------------------------------- */}

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email-input"
                placeholder="Email"
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="password-input"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div
              style={{ display: "none" }}
              id="alert"
              className="alert alert-danger"
              role="alert"
            >
              <span
                className="glyphicon glyphicon-exclamation-sign"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Error:</span>{" "}
              <span className="msg"></span>
            </div>
            <button type="submit" className="btn btn-default">
              Sign Up
            </button>
          </form>
          <br />
          <p>
            Or log in <a href="/login">here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
