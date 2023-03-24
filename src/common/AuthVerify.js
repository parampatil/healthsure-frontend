import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

const AuthVerify = (props) => {
  let location = useLocation();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      const decodedJwt = parseJwt(user.token);

      if (decodedJwt.exp * 10000 < Date.now()) {
        props.logOut();
      }
    }
  }, [location, props]);

  return <div></div>;
};

export default AuthVerify;
