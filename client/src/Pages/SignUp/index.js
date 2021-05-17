import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import NavStart from "../../components/NavStart";
function SignUp() {
  let history = useHistory();

  const [formState, setFormState] = useState({
    email: "",
    username: "",
    password: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value.trim() });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (formState.email && formState.password && formState.username) {
      API.userSignup({
        email: formState.email,
        username: formState.username,
        password: formState.password,
      })
        .then((res) => {
          if (res.status === 200) {
            history.push("/");
          }
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div>
      <NavStart />
      <div className="col-md-6 col-md-offset-3">
        <h2>Sign Up Form</h2>
        <br></br>
        <br></br>
        <form>
          <div className="form-group">
            <input
              className="signup"
              type="text"
              onChange={handleInputChange}
              name="email"
              label="Email"
              placeholder="Email (required)"
              required
              value={formState.email}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              onChange={handleInputChange}
              name="username"
              label="Username"
              placeholder="Username (required)"
              required
              value={formState.username}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              onChange={handleInputChange}
              name="password"
              label="Password"
              placeholder="Password (required)"
              required
              value={formState.password}
            />
          </div>
          <button
            type="submit"
            className="btn btn-default"
            disabled={!(formState.email && formState.password)}
            onClick={handleFormSubmit}
          >
            Create account
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
