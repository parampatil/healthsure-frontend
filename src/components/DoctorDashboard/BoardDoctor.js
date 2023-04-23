import React, { useState, useEffect } from "react";
import {Routes, Route, NavLink, Navigate} from "react-router-dom"

import UserService from "../../services/user.service";
import EventBus from "../../common/EventBus";




import DoctorDashboard from "./DoctorDashboard";
import DoctorHome from "./DoctorHome";
import DoctorInbox from "./DoctorInbox";
import DoctorAppointments from "./DoctorAppointments";
import DoctorProfile from "./DoctorProfile";




const BoardAdmin = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getAdminBoard().then(
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
// Doctor Dashboard 
return (
  <div className="container-fluid p-0 d-flex">
    <div className="d-flex flex-column flex-shrink-0 bg-light shadow-lg p-3 flex-grow-1">
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li className="nav-item"> 
            <NavLink to="DoctorHome" 
              className={({isActive}) => {
                  return ('nav-link py-3 border-bottom text-start' +
                  (isActive ? ' active' : ''))
              }}> 
              <i className="fa fa-home"></i> <small>Home</small> 
            </NavLink>
          </li>
          <li> 
            <NavLink to="DoctorDashboard" 
              className={({isActive}) => {
                  return ('nav-link py-3 border-bottom text-start' +
                  (isActive ? ' active' : ''))
              }}> 
              <i className="fa fa-dashboard"></i> <small>Dashboard</small>
            </NavLink>
          </li>
          
          <li> 
          <NavLink to="DoctorAppointments" 
              className={({isActive}) => {
                  return ('nav-link py-3 border-bottom text-start' +
                  (isActive ? ' active' : ''))
              }}> 
              <i className="fa fa-calendar-check-o"></i> <small>My Appointments</small>
            </NavLink>
          </li>
          <li>
            <NavLink to="DoctorProfile" 
              className={({isActive}) => {
                  return ('nav-link py-3 border-bottom text-start' +
                  (isActive ? ' active' : ''))
              }}> 
              <i className="fa fa-user"></i> <small>Patient Records</small>
            </NavLink>
          </li>
          <li>
            <NavLink to="DoctorInbox" 
              className={({isActive}) => {
                  return ('nav-link py-3 border-bottom text-start' +
                  (isActive ? ' active' : ''))
              }}> 
              <i className="fa fa-envelope"></i> <small>Inbox</small>
            </NavLink>
          </li>
      </ul>
    </div>

    {/* <header className="jumbotron">
      <h3>{content}</h3>
    </header> */}
    <div className="container-fluid">
      <Routes>
        <Route index element={<Navigate to="DoctorHome" replace />} />
        <Route path="DoctorHome" element={<DoctorHome />}></Route>
        <Route path="DoctorDashboard" element={<DoctorDashboard />} />
        <Route path="DoctorInbox" element={<DoctorInbox />} />
        <Route path="DoctorAppointments" element={<DoctorAppointments />} />
        <Route path="DoctorProfile" element={<DoctorProfile />} />
      </Routes>
    </div>
  </div>
  );
};

export default BoardAdmin;