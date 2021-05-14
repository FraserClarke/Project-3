import axios from "axios";

const axiosInstance = axios.create({
  baseURL: window.location.host.includes('localhost') ? 'http://localhost:3001' : '',
  withCredentials: true
})

export default {
  // User sign up
  userSignup: function (userData) {
    return axiosInstance({
      method: 'post',
      url: "/api/user/signup",
      data: userData
    })
  },

  // User log in
  userLogin: function (userData) {
    return axiosInstance({
      method: 'post',
      url: "/api/user/login",
      data: userData
    })
  },

  // Check if user is logged in
  userLoggedIn: function() {
    return axiosInstance({
      method: 'get',
      url: "/api/user/logged-in",
    })
  },

  userLogout: function() {
    return axiosInstance({
      method: 'get',
      url: "/api/user/logout",
    })
  }
};
