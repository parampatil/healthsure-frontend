import React, { useState, useEffect } from "react";

import UserService from "../../services/user.service";
import EventBus from "../../common/EventBus";

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
            {/* <h2>My Dashboard</h2> */}
            <div class="patient-info">
              <h3>My Information</h3>
              <ul>
                <li>
                  <strong>Name:</strong> Abhijith Dameruppala
                </li>
                <li>
                  <strong>Age:</strong> 500
                </li>
                <li>
                  <strong>Gender:</strong> Male
                </li>
                <li>
                  <strong>Address:</strong> 923 N College Ave, IN, USA
                </li>
                <li>
                  <strong>Phone:</strong> 123-420-1234
                </li>
              </ul>
            </div>
            <div class="medical-records">
              <h3>Medical Records</h3>
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Doctor</th>
                    <th>Diagnosis</th>
                    <th>Treatment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01/01/2023</td>
                    <td>Dr. Sri Ram</td>
                    <td>High blood pressure</td>
                    <td>Prescribed medication</td>
                  </tr>
                  <tr>
                    <td>02/15/2023</td>
                    <td>Dr. Param Patil</td>
                    <td>Flu</td>
                    <td>Prescribed rest and fluids</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
