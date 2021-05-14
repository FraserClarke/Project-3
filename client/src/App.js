import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import pages
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { AuthContext } from "./utils/authContext";
import { Main } from "./pages/Main";
import API from "./utils/API";

function App(){

  const [isAuthenticated, setIsAuthenticated ] = useState(false);
  const value = { isAuthenticated, setIsAuthenticated };

  // We check if user is already logged in, and if they are then we set isAuthenticated to true
  useEffect(() => {
    API.userLoggedIn().then(response => {
      setIsAuthenticated(response.data.isAuthenticated)
    })
  }, []);


  return (
    <AuthContext.Provider value={value}>
      <Router>
          <div>
            <Switch>
              <Route exact path='/signup'>
                <SignUp />
              </Route>
              <Route exact path='/login'>
                <Login />
              </Route>
              {
                /* This following bit says that for every path that includes '/' (that is, all of them) we check if user is authenticated and if they're not we load the Login component. If they are, we load the Main component. Replace the main component with all your routes for handling protected pages that require authorisation.*/
              }
              <Route path='/'>
                {isAuthenticated ? 
                  <Main /> : <Login />
                }
              </Route>
            </Switch>
          </div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App;
