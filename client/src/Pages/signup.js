import React, { useState } from "react";
// import {Link } from "react-router-dom";
// import Container from "../../components/Container";
// import Col from "../../components/Col";
// import Nav from "../Components/NavSignLogin";
import "bootstrap/dist/css/bootstrap.min.css";
import { registerUser } from "../utils/API";
// import isauthenticated from "../../../config/middleware/isauthenticated";
import { useHistory } from "react-router-dom";
console.log(registerUser);
// const history = useHistory();  //>>>>>>>has to be inside a function
function Signup() {
  const [username, setusername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState();
  const [ownersTrade, setOwnersTrade] = useState();

  //const [errors, setErrors] = useState({});

  //   const [registerState, setRegisterState] = useState({
  //     username: '',
  //     password: '',
  //     firstName: '',
  //     lastName: '',
  //     phoneNumber: '',
  //     address: '',
  //     ownersTrade: '',
  // });
  const history = useHistory();
  async function handleSubmit(event) {
    event.preventDefault();
    const userData = {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      address: address,
      email: email,
      ownersTrade: ownersTrade,
      //registerUser()then redirect
    };

    // console.log(userData);
    registerUser(userData).then((response) => {
      //logic to do redirect if response is valid user.
      console.log(response);
      //add backend handling to verify valid user. backend res.send api d
      //if statement...>>user us valid then history.push.
      history.push("/login");
    //   if (!userData.username || !userData.password) {
    //     history.push("/login");
    //   } else {
    //     console.log("Input Error.");
    //   }
      //else >> display error message if unsucessfull.
      //can have ONE useSTATE for displaing unsuccessful "EROR MESSAGE"
      //signup message for invalid user
    });  
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
            {/* ------------^^^^^^^^^^^^^^^^^------------- */}

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email-input"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputusername">User Name</label>
              <input
                type="username"
                className="form-control"
                id="username-input"
                placeholder="username"
                onChange={(e) => setusername(e.target.value)}
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
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn btn-default"
            >
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
