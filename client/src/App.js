import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from "./logo.svg";
import "./App.css";
import Signup from "./Pages/signup";
import Login from "./Pages/login";
import Nav from "./Components/NavSignLogin";
// import Nav from "./Components/NavSignLogin";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import login from "./pages/login";
// import signup from "./pages/signup";

function App() {
  return (
    // <Router>
    <Router>
    <div className="pl-0 pr-0 m-0 container-fluid">
        <Nav />
        {/* <Route exact path="/" component={Landing} /> */}
        <div className="p-0 m-0 container-fluid">
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            {/* <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/dashboard" component={(Dashboard)} />
            <PrivateRoute exact path="/other" component={(Other)} />
            <PrivateRoute exact path="/startUp" component={StartUp} /> */}
        </div>
    </div>
</Router>
    // </Router>
  );
}

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Wrapper>
//           <Route exact path="/" component={About} />
//           <Route exact path="/about" component={About} />
//           <Route exact path="/discover" component={Discover} />
//           <Route exact path="/search" component={Search} />
//         </Wrapper>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

export default App;
