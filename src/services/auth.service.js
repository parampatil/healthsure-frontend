import axios from "axios";
import { auth} from "../config";
import {signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, TwitterAuthProvider} from "firebase/auth"

// const API_URL = "http://192.168.0.181:8080/";
// const API_URL = "http://127.0.0.1:8000/dashboard/";
// const API_URL = "http://127.0.0.1:8000/allinone/token/";
const API_URL = "https://healthsure.pythonanywhere.com/"; // Pythonanywhere

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const loginOauth = (provider) => {
  if (provider==="google") {
    return signInWithPopup(auth, new GoogleAuthProvider())
    .then((data)=>{
      if (data.user.stsTokenManager.accessToken) {
        const userData = {
          accessToken : data.user.stsTokenManager.accessToken,
          providerId: data.providerId,
          displayName: data.user.displayName,
          email: data.user.email,
          emailVerified: data.user.emailVerified,
          profileImageURL: data.user.photoURL
        }  
        localStorage.setItem("user", JSON.stringify(userData));
      }

      return data;
    });
  }
  else if (provider==="facebook") {
    console.log("Provider Facebook - auth services")
    return signInWithPopup(auth, new FacebookAuthProvider())
    .then((data)=>{
      console.log(data)
      if (data.user.stsTokenManager.accessToken) {
        const userData = {
          accessToken : data.user.stsTokenManager.accessToken,
          providerId: data.providerId,
          displayName: data.user.displayName,
          email: data.user.email,
          emailVerified: data.user.emailVerified,
          profileImageURL: data.user.photoURL
        }  
        localStorage.setItem("user", JSON.stringify(userData));
      }

      return data;
    });
  }
  else if (provider==="github") {
    console.log("Provider Github - auth services")
    return signInWithPopup(auth, new GithubAuthProvider())
    .then((data)=>{
      console.log(data)
      if (data.user.stsTokenManager.accessToken) {
        const userData = {
          accessToken : data.user.stsTokenManager.accessToken,
          providerId: data.providerId,
          displayName: data.user.displayName,
          email: data.user.email,
          emailVerified: data.user.emailVerified,
          profileImageURL: data.user.photoURL
        }  
        localStorage.setItem("user", JSON.stringify(userData));
      }

      return data;
    });
  }
  else if (provider==="twitter") {
    console.log("Provider Github - auth services")
    return signInWithPopup(auth, new TwitterAuthProvider())
    .then((data)=>{
      console.log(data)
      if (data.user.stsTokenManager.accessToken) {
        const userData = {
          accessToken : data.user.stsTokenManager.accessToken,
          providerId: data.providerId,
          displayName: data.user.displayName,
          email: data.user.email,
          emailVerified: data.user.emailVerified,
          profileImageURL: data.user.photoURL
        }  
        localStorage.setItem("user", JSON.stringify(userData));
      }

      return data;
    });
  }

};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  loginOauth,
  logout,
};
