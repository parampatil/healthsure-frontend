import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import Login from "./Login";
import Register from "./Register"

const LoginNav = () => {
  return (
    <div className="container-fluid h-100 w-50 mt-5 p-5 d-flex flex-column justify-content-start align-items-center">
      {/* <!-- Pills navs --> */}
      <ul
        className="nav nav-pills nav-justified mb-3 w-100"
        id="ex1"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <NavLink
            to={"login"}
            className={({ isActive }) => {
              return "nav-link" + (isActive ? " active" : "");
            }}
            id="tab-login"
          >
            Login
          </NavLink>
        </li>
        <li className="nav-item" role="presentation">
          <NavLink
            to={"register"}
            className={({ isActive }) => {
              return "nav-link" + (isActive ? " active" : "");
            }}
            id="tab-register"
          >
            Register
          </NavLink>
        </li>
      </ul>
      {/* <!-- Pills navs --> */}

      <div className="w-100">
        <Routes>
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
};

export default LoginNav;
