import React from 'react';
import { useHistory } from "react-router-dom";
import API from '../../utils/API';

export function Main() {
  const history = useHistory();
  function logOut() {
    API.userLogout();
    history.go(0); // refreshes the page, but we could push them back to login page
  }

  return <div>You're logged in!<button type="button" onClick={logOut}>
    Logout
 </button></div>;
}