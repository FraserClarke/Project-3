import React, { useState } from "react";
// import Container from "../../components/Container";
// import Col from "../../components/Col";
// import Nav from "../Components/NavSignLogin";
import "bootstrap/dist/css/bootstrap.min.css";

function Signup() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("username is " + username);
    console.log("password is " + password);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h2>Sign Up Form</h2>
          <form onSubmit={handleSubmit} className="signup">
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
