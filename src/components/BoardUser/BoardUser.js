import React, { useState, useEffect } from "react";

import UserService from "../../services/user.service";
import EventBus from "../../common/EventBus";

import PatientDetails from "./PatientDetails"
import MedicalRecords from "./MedicalRecords";

import "./BoardUser.css";

const BoardUser = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
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
      
      <div class="container-fluid">
        <div class="row">
          {/* <!-- content area --> */}
          {/* <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4"> */}

          <div class="patient-dashboard">
            <PatientDetails />
            <MedicalRecords />
            <div class="insurance-claims">
              <h3>Insurance Claims</h3>
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Doctor</th>
                    <th>Diagnosis</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01/01/2023</td>
                    <td>Dr. Sri Ram</td>
                    <td>High blood pressure</td>
                    <td>$50</td>
                    <td>Pending</td>
                  </tr>
                  <tr>
                    <td>02/15/2023</td>
                    <td>Dr. Param Patil</td>
                    <td>Flu</td>
                    <td>$100</td>
                    {/* <td>Approved</td> */}
                    <td>{content}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardUser;
