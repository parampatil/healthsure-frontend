import React, { useState, useEffect } from "react";

import UserService from "../../services/user.service";
import EventBus from "../../common/EventBus";

import PatientDetails from "./PatientDetails"
import MedicalRecords from "./MedicalRecords";
import InsuranceClaims from "./InsuranceClaims";

import "./BoardUser.css";

const BoardUser = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    {console.log("BoardUser Loaded")}

    UserService.getUserBoard().then(
      (response) => {
        // setContent(response.data);
        setContent(response.data.quote);
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
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
          {/* <!-- content area --> */}
          {/* <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4"> */}

          <div className="patient-dashboard">

            <PatientDetails />
            <MedicalRecords />
            <InsuranceClaims />
            
      </div>
    </div>
  );
};

export default BoardUser;
