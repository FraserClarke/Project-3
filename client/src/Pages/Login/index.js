import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import { AuthContext } from "../../utils/authContext";
import NavStart from "../../components/NavStart";
function Login() {
  // This allows us to set the user's authentication state in the context object
  const { setIsAuthenticated } = useContext(AuthContext);

  // State object to store everything from our form
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [hasErrorState, setHasErrorState] = useState(false);

  // history hook to use for navigating the user
  const history = useHistory();

  // if a value in the form changes, we update the state object above
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value.trim() });
  }

  // handle form submit button clicked
  function handleFormSubmit(e) {
    e.preventDefault(); // Avoid reloading page (which is default behaviour upon submit for a form)
    setHasErrorState(false);
    if (formState.email && formState.password) {
      // Was email and password entered?
      // We make the API call, and if there's a returned object from the server we navigate the user back to the root level and set the context
      API.userLogin({
        email: formState.email,
        password: formState.password,
      })
        .then((response) => {
          if (response.data.id) {
            setIsAuthenticated(true);
            history.push("/");
          } else {
            setHasErrorState(true);
          }
        })
        .catch((err) => {
          setFormState({
            email: "",
            password: "",
          });
          setHasErrorState(true);
          console.log(err);
        });
    }
  }

  return (
    <div>
      <NavStart />
      <div className="col-md-6 col-md-offset-3">
        <h2>Log in</h2>
        <br></br>
        <br></br>
        <form>
          <div className="form-group">
            <input
              type="email"
              onChange={handleInputChange}
              name="email"
              label="Email"
              placeholder="Email (required)"
              value={formState.email}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              onChange={handleInputChange}
              name="password"
              label="Password"
              placeholder="Password (required)"
              value={formState.password}
            />
          </div>
          <button
            type="submit"
            className="btn btn-default"
            disabled={!(formState.email && formState.password)}
            onClick={handleFormSubmit}
          >
            Log in
          </button>

          {hasErrorState ? <strong>Invalid details, try again</strong> : ""}
        </form>
      </div>
    </div>
  );
}

export default Login;
