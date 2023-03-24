import axios from "axios";
import authHeader from "./auth-header";

// const API_URL = "http://localhost:8080/api/test/";
const API_URL = "https://dummyjson.com/";

const getPublicContent = () => {
  // return axios.get(API_URL + "all");
  return axios.get(API_URL + "quotes/random");
};

const getUserBoard = () => {
  // return axios.get(API_URL + "user", { headers: authHeader() });
  return axios.get(API_URL + "quotes/random");
};

const getModeratorBoard = () => {
  // return axios.get(API_URL + "mod", { headers: authHeader() });
  return axios.get(API_URL + "quotes/random");
};

const getAdminBoard = () => {
  // return axios.get(API_URL + "admin", { headers: authHeader() });
  return axios.get(API_URL + "quotes/random");
};

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};