import axios from "axios";

// const API_URL = "http://localhost:8080/";
const API_URL = "https://dummyjson.com/";

const register = (username, email, password) => {
  return axios.post(API_URL + "users/add", {
    // username,
    // email,
    // password,
    firstName: 'Param',
    lastName: 'Patil',
    age: 100,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "auth/login",{
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      console.log(response.data);
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
