import React, { useState } from "react";
// import Container from "../../components/Container";
// import Col from "../../components/Col";
// import Nav from "../Components/NavSignLogin";
import "bootstrap/dist/css/bootstrap.min.css";
import { loginUser } from "../utils/API";

function Login() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      userName: userName,
      password: password,
    };
    const response = loginUser(user);
    console.log(response);
    console.log("username is " + userName);
    console.log("password is " + password);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h2>Login Form</h2>
          <form onSubmit={handleSubmit} className="login">
            <div className="form-group">
              <label htmlFor="exampleInputUserName">User Name</label>
              <input
                type="userName"
                className="form-control"
                id="userName-input"
                placeholder="userName"
                onChange={(e) => setUserName(e.target.value)}
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
              Log in
            </button>
          </form>
          <br />
          <p>
            Or sign up <a href="/signup">here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
