import React, { useState, useEffect } from "react";
import {Routes, Route, NavLink, Navigate} from "react-router-dom"


import UserService from "../../services/user.service";
import EventBus from "../../common/EventBus";



import InsuranceDashboard from "./InsuranceDashboard";
import InsruanceHome from "./InsuranceHome";
import InsuranceInbox from "./InsuranceInbox";
import InsuranceAppointments from "./InsuranceProfile";
import InsuranceProfile from "./InsuranceAppointments";



const BoardModerator = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getModeratorBoard().then(
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
// Insurance Provider Dashboard
  return (
    <div className="container-fluid p-0 d-flex">
    <div className="d-flex flex-column flex-shrink-0 bg-light shadow-lg p-3 flex-grow-1">
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li className="nav-item"> 
            <NavLink to="InsruanceHome" 
              className={({isActive}) => {
                  return ('nav-link py-3 border-bottom text-start' +
                  (isActive ? ' active' : ''))
              }}> 
              <i className="fa fa-home"></i> <small>Home</small> 
            </NavLink>
          </li>
          <li> 
            <NavLink to="InsuranceDashboard" 
              className={({isActive}) => {
                  return ('nav-link py-3 border-bottom text-start' +
                  (isActive ? ' active' : ''))
              }}> 
              <i className="fa fa-dashboard"></i> <small>Dashboard</small>
            </NavLink>
          </li>
          <li>
            <NavLink to="InsuranceAppointments" 
              className={({isActive}) => {
                  return ('nav-link py-3 border-bottom text-start' +
                  (isActive ? ' active' : ''))
              }}> 
              <i className="fa fa-calendar-check-o"></i> <small>Pending Claims</small>
            </NavLink>
          </li>
          
          <li> 
          <NavLink to="InsuranceProfile" 
              className={({isActive}) => {
                  return ('nav-link py-3 border-bottom text-start' +
                  (isActive ? ' active' : ''))
              }}> 
              <i className="fa fa-user"></i> <small>Patient Information</small>
            </NavLink>
          </li>
          <li>
            <NavLink to="InsuranceInbox" 
              className={({isActive}) => {
                  return ('nav-link py-3 border-bottom text-start' +
                  (isActive ? ' active' : ''))
              }}> 
              <i className="fa fa-envelope"></i> <small>Chat with Patients</small>
            </NavLink>
          </li>
      </ul>
    </div>

    {/* <header className="jumbotron">
      <h3>{content}</h3>
    </header> */}
    <div className="container-fluid">
      <Routes>
        <Route index element={<Navigate to="InsruanceHome" replace />} />
        <Route path="InsruanceHome" element={<InsruanceHome />}></Route>
        <Route path="InsuranceDashboard" element={<InsuranceDashboard />} />
        <Route path="InsuranceInbox" element={<InsuranceInbox />} />
        <Route path="InsuranceAppointments" element={<InsuranceAppointments />} />
        <Route path="InsuranceProfile" element={<InsuranceProfile />} />
      </Routes>
    </div>
  </div>
  );
};

export default BoardModerator;
