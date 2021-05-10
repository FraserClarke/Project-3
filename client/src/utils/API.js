import axios from "axios";
const url = "http://localhost:8080"

export const registerUser = (userData) => {
  // console.log(userData);
  return axios.post(`${url}/api/signup`, {
    userName: userData.userName,
    password: userData.password,
    firstName: userData.firstName,
    lastName: userData.lastName,
    phoneNumber: userData.phoneNumber,
    address: userData.address,
    ownersTrade: userData.ownersTrade,
    email: userData.email,
  });
};

export const loginUser = (userData) => {
  // console.log(userData);
  return axios.post(`${url}/api/login`, {
    userName: userData.userName,
    password: userData.password,
  });
};

// export const getUser = () => {
//     return axios.get('/api/profile');
// };

// export const getUsers = () => {
//     return axios.get('/api/displayusers')
// };
