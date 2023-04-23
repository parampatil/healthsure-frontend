import React, { useState, useEffect } from "react";
import {Routes, Route, NavLink, Navigate} from "react-router-dom"

import UserService from "../../services/user.service";
import EventBus from "../../common/EventBus";

import PatientDashboard from "./PatientDashboard";
import PatientHome from "./PatientHome";
import PatientInbox from "./PatientInbox";
import PatientAppointments from "./PatientAppointments";
import PatientProfile from "./PatientProfile";

const BoardUser = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  return (
    // Navigation Bar
    <div className="container-fluid p-0 d-flex">
      <div className="d-flex flex-column flex-shrink-0 bg-light shadow-lg p-3 flex-grow-1">
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
            <li className="nav-item"> 
              <NavLink to="PatientHome" 
                className={({isActive}) => {
                    return ('nav-link py-3 border-bottom text-start' +
                    (isActive ? ' active' : ''))
                }}> 
                <i className="fa fa-home"></i> <small>Home</small> 
              </NavLink>
            </li>
            <li> 
              <NavLink to="PatientDashboard" 
                className={({isActive}) => {
                    return ('nav-link py-3 border-bottom text-start' +
                    (isActive ? ' active' : ''))
                }}> 
                <i className="fa fa-dashboard"></i> <small>Dashboard</small>
              </NavLink>
            </li>
            
            <li> 
            <NavLink to="PatientAppointments" 
                className={({isActive}) => {
                    return ('nav-link py-3 border-bottom text-start' +
                    (isActive ? ' active' : ''))
                }}> 
                <i className="fa fa-calendar-check-o"></i> <small>Book an Appointment</small>
              </NavLink>
            </li>
            <li>
              <NavLink to="PatientProfile" 
                className={({isActive}) => {
                    return ('nav-link py-3 border-bottom text-start' +
                    (isActive ? ' active' : ''))
                }}> 
                <i className="fa fa-user"></i> <small>Find your Insurance Provider</small>
              </NavLink>
            </li>
            <li>
              <NavLink to="PatientInbox" 
                className={({isActive}) => {
                    return ('nav-link py-3 border-bottom text-start' +
                    (isActive ? ' active' : ''))
                }}> 
                <i className="fa fa-envelope"></i> <small>Chat with your Doctor</small>
              </NavLink>
            </li>
        </ul>
      </div>

      {/* <header className="jumbotron">
        <h3>{content}</h3>
      </header> */}
      <div className="container-fluid">
        <Routes>
          <Route index element={<Navigate to="PatientHome" replace />} />
          <Route path="PatientHome" element={<PatientHome />}></Route>
          <Route path="PatientDashboard" element={<PatientDashboard />} />
          <Route path="PatientInbox" element={<PatientInbox />} />
          <Route path="PatientAppointments" element={<PatientAppointments />} />
          <Route path="PatientProfile" element={<PatientProfile />} />
        </Routes>
      </div>
    </div>
  );
};

export default BoardUser;
