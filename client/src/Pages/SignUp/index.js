import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API"

function SignUp(){
    let history = useHistory();

    const [formState, setFormState] = useState({
        email: "",
        username: "",
        password: ""
      })
    
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormState({...formState, [name]: value.trim()})
    };

    function handleFormSubmit(e) {
        e.preventDefault();
        if(formState.email && formState.password && formState.username) {
            API.userSignup({
                email: formState.email,
                username: formState.username,
                password: formState.password
              })
                .then((res) => {

                  if(res.status === 200){
                      history.push("/");
                  }
              })
              .catch(err => console.log(err));
        
        }
    }
    
    return (
            <form>
            <input type="text"
                onChange={handleInputChange}
                name="email"
                label="Email"
                placeholder="Email (required)"
                required
                value={formState.email}
            />
            <input type="text"
                onChange={handleInputChange}
                name="username"
                label="Username"
                placeholder="Username (required)"
                required
                value={formState.username}
            />
            <input type="password"
                onChange={handleInputChange}
                name="password"
                label="Password"
                placeholder="Password (required)"
                required
                value={formState.password}
            />
            <button
                disabled={!(formState.email && formState.password)}
                onClick={handleFormSubmit}
            >
                Create account
            </button>
          </form>
    );
}

export default SignUp;