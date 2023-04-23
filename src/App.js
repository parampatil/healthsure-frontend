import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Link, useLocation, NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import "./App.css";

import LoginNav from "./components/Login/LoginNav";
import Home from "./components/LandingPage/Home";
import Profile from "./components/Profile/Profile";
import BoardPatient from "./components/PatientDashboard/BoardPatient";
import BoardInsurance from "./components/InsuranceDashboard/BoardInsurance";
import BoardDoctor from "./components/DoctorDashboard/BoardDoctor";
import ResetPassword from "./components/Profile/ResetPassword";
import Chat from "./components/chat/Chat";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import AuthVerify from "./common/AuthVerify";
import EventBus from "./common/EventBus";

// Importing Logos
import Logo from "./components/SvgImages/Logo";
import SmallLogo from "./components/SvgImages/SmallLogo";

const App = () => {
  // Initial code which should be uncommented once roles are included in user data
  const [showInsuranceBoard, setShowInsuranceBoard] = useState(true);
  const [showDoctorBoard, setShowDoctorBoard] = useState(true);
  const [showPatientBoard, setShowPatientBoard] = useState(true);

  // const [showInsuranceBoard, setShowInsuranceBoard] = useState(true);
  // const [showDoctorBoard, setShowDoctorBoard] = useState(true);
  // const [showPatientBoard, setShowPatientBoard] = useState(true);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  let location = useLocation();

  useEffect(() => {
    if (["/login", "/register"].includes(location.pathname)) {
      dispatch(clearMessage()); // clear message when changing location
    }
  }, [dispatch, location]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      // setShowInsuranceBoard(currentUser.roles.includes("ROLE_INSURANCE"));
      // setShowDoctorBoard(currentUser.roles.includes("ROLE_DOCTOR"));
      // setShowPatientBoard(currentUser.roles.includes("ROLE_PATIENT"));
    } else {
      setShowInsuranceBoard(false);
      setShowDoctorBoard(false);
      setShowPatientBoard(false);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  return (
    <div className="container-fluid m-0 p-0 min-vh-100 d-flex flex-column">
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg d-flex justify-content-between px-3 fs-5 flex-shrink-0">
        <button
          className="navbar-toggler order-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Small logo for mobile view */}
        <SmallLogo
          width={30}
          height={30}
          className="d-lg-none order 1 order-lg-1"
        />

        {/* Home and Boards */}
        <div
          className="collapse navbar-collapse justify-content-start w-100 order-2 order-lg-2 multi-collapse"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to={"/home"}
                className={({ isActive }) => {
                  return "nav-link" + (isActive ? " active" : "");
                }}
              >
                Home
              </NavLink>
            </li>

            {showInsuranceBoard && (
              <li className="nav-item">
                <NavLink
                  to={"/insurance"}
                  className={({ isActive }) => {
                    return "nav-link" + (isActive ? " active" : "");
                  }}
                >
                  Insurance Provider
                </NavLink>
              </li>
            )}

            {showDoctorBoard && (
              <li className="nav-item">
                <NavLink
                  to={"/doctor"}
                  className={({ isActive }) => {
                    return "nav-link" + (isActive ? " active" : "");
                  }}
                >
                  Doctor
                </NavLink>
              </li>
            )}

            {showPatientBoard && (
              <li className="nav-item">
                <NavLink
                  to={"/patient"}
                  className={({ isActive }) => {
                    return "nav-link" + (isActive ? " active" : "");
                  }}
                >
                  Patient
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        {/* Center Logo */}
        <div className="collapse navbar-collapse justify-content-center w-100 order-2 order-lg-2 multi-collapse">
          <Link to={"/"} className="navbar-brand mx-lg-0">
            <Logo height={30} width={200} />
          </Link>
        </div>

        {/* Profile or Login */}
        <div
          className="collapse navbar-collapse justify-content-end w-100 order-3 order-lg-3 multi-collapse"
          id="navbarNavDropdown"
        >
          {/* <ul className="navbar-nav d-flex flex-row align-items-center">
            <li className="nav-item">
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" spellCheck="false" data-ms-editor="true" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </li>
          </ul> */}
          <ul className="navbar-nav d-flex flex-row align-items-center justify-content-lg-end">
            {currentUser ? (
              <div className="nav-item w-100 d-flex flex-row align-items-center justify-content-between">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.displayName}
                </Link>
                <div className="h-100">
                  <a
                    className="nav-link "
                    href="/"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      src={currentUser.profileImageURL}
                      width="40"
                      height="40"
                      className="rounded-circle"
                      alt="profile"
                    />
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    {/* <a className="dropdown-item" href="/">
                      Dashboard
                    </a> */}
                    <Link className="dropdown-item" to={"/profile"}>
                      Edit Profile
                    </Link>
                    <Link className="dropdown-item" to={"/chat"}>
                      Chat
                    </Link>
                    <button
                      type="button"
                      className="dropdown-item btn btn-light btn-outline-danger"
                      onClick={logOut}
                    >
                      Log Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="collapse navbar-collapse justify-content-end w-100 order-3 order-lg-3"
                id="navbarNavDropdown"
              >
                <li className="nav-item">
                  <Link to={"/loginNav"} className="nav-link">
                    Login
                  </Link>
                </li>

                {/* <li className="nav-item">
                <Link to={"/registerNav"} className="nav-link">
                  Sign Up
                </Link>
              </li> */}
                {/* NOTE: I will need redirect to enable this register */}
              </div>
            )}
          </ul>
        </div>
      </nav>

      <div className="container-fluid w-100 m-0 p-0 d-flex flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/loginNav/*" element={<LoginNav />} />

          {/* <Route path="/register/*" element={<LoginNav />} /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/patient/*" element={<BoardPatient />} />
          <Route path="/insurance/*" element={<BoardInsurance />} />
          <Route path="/doctor/*" element={<BoardDoctor />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>

      {/* <AuthVerify logOut={logOut}/> */}
    </div>
  );
};

export default App;
