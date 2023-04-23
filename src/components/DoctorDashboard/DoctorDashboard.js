import React from "react";
// import "./Doctor.css";
import Profile from "../Profile/Profile.js";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const DoctorDashboard = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      {/* Profile Cell */}
      <div className="container-fluid w-100" id="profile-info">
        <section>
          <div class="container py-5">
            <div class="row">
              <div class="col-lg-4">
                <div class="card mb-4 shadow-lg rounded">
                  <div class="card-body text-center">
                    <img
                      src={currentUser.profileImageURL}
                      alt="avatar"
                      class="rounded-circle img-fluid"
                      style={{ width: "100px" }}
                    />
                    <h5 class="my-3">{currentUser.displayName}</h5>
                    <p>
                      Rating : <font COLOR="#ff0000">4.9</font>
                    </p>
                    <p>
                      Upcoming Appointments : <font COLOR="#ff0000">2</font>
                    </p>
                    <div class="d-grid col-10 mx-auto">
                      <button
                        type="button"
                        class="btn btn-primary"
                        onClick={Profile}
                      >
                        Edit Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Profile Details Cell */}
              <div class="col-lg-8">
                <div class="card mb-4 shadow-lg rounded">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-3">
                        <p class="mb-0">Full Name</p>
                      </div>
                      <div class="col-sm-9">
                        <p class="text-muted mb-0">{currentUser.displayName}</p>
                      </div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <p class="mb-0">Email</p>
                      </div>
                      <div class="col-sm-9">
                        <p class="text-muted mb-0 d-flex align-items-center">
                          {currentUser.email}{" "}
                          {currentUser.emailVerified === "true" && (
                            <i
                              class="fa fa-check fa-lg mx-2"
                              style={{ color: "green" }}
                            />
                          )}{" "}
                          <button type="button" className="btn ms-auto">
                            <i className="fa fa-pencil fa-lg" />
                          </button>
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <p class="mb-0">Specialization</p>
                      </div>
                      <div class="col-sm-9">
                        <p class="text-muted mb-0">Cardiologist</p>
                      </div>
                    </div>

                    <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <p class="mb-0">Phone</p>
                      </div>
                      <div class="col-sm-9">
                        <p class="text-muted mb-0">(097) 234-5678</p>
                      </div>
                    </div>

                    <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <p class="mb-0">Address</p>
                      </div>
                      <div class="col-sm-9">
                        <p class="text-muted mb-0">
                          Bay Area, San Francisco, CA
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Medical Records */}
          {/* Date	Patient	Diagnosis	Treatment	Update Prescription */}
          <div class="container-fluid">
            <div class="card mb-4 shadow-lg rounded text-center">
              <div className="medical-records" class="card-body text-center">
                <h2>Previous Medical Records</h2>
                <br></br>
                <div class="table-wrapper-scroll-y my-custom-scrollbar">
                  <table class="table table-bordered table-striped mb-0">
                    <thead>
                      <tr class="sticky-top bg-light">
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Patient</th>
                        <th scope="col">Diagnosis</th>
                        <th scope="col">Treatment</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>01/01/2023</td>
                        <td>Abhijith</td>
                        <td>High blood pressure</td>
                        <td>Prescribed medication</td>
                        <td>
                          <button type="button" class="btn btn-primary">
                            Update Prescription
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>02/15/2023</td>
                        <td>Sumanth Muvva</td>
                        <td>Flu</td>
                        <td>Prescribed rest and fluids</td>
                        <td>
                          <button type="button" class="btn btn-primary">
                            Update Prescription
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>01/01/2023</td>
                        <td>Sri Ram</td>
                        <td>High blood pressure</td>
                        <td>Prescribed rest and fluids</td>
                        <td>
                          <button type="button" class="btn btn-primary">
                            Update Prescription
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>01/01/2023</td>
                        <td>Sri Ram</td>
                        <td>High blood pressure</td>
                        <td>Prescribed rest and fluids</td>
                        <td>
                          <button type="button" class="btn btn-primary">
                            Update Prescription
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>01/01/2023</td>
                        <td> Sri Ram</td>
                        <td>High blood pressure</td>
                        <td>Prescribed rest and fluids</td>
                        <td>
                          <button type="button" class="btn btn-primary">
                            Update Prescription
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">6</th>
                        <td>01/01/2023</td>
                        <td>Sri Ram</td>
                        <td>High blood pressure</td>
                        <td>Prescribed rest and fluids</td>
                        <td>
                          <button type="button" class="btn btn-primary">
                            Update Prescription
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">7</th>
                        <td>01/01/2023</td>
                        <td>Sri Ram</td>
                        <td>High blood pressure</td>
                        <td>Prescribed rest and fluids</td>
                        <td>
                          <button type="button" class="btn btn-primary">
                            Update Prescription
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* Insurance Claims */}
          <div class="container-fluid">
            <div class="card mb-4 shadow-lg rounded text-center">
              <div className="insurance-claims" class="card-body text-center">
                <h2>Insurance Claims</h2>
                <br></br>
                <div class="table-wrapper-scroll-y my-custom-scrollbar">
                  <table class="table table-bordered table-striped mb-0">
                    <thead>
                      <tr class="sticky-top bg-light">
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Patient</th>
                        <th scope="col">Diagnosis</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>

                        <td>01/01/2023</td>
                        <td> Sri Ram</td>
                        <td>High blood pressure</td>
                        <td>$50</td>
                        <td>Pending</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>02/15/2023</td>
                        <td>Param Patil</td>
                        <td>Flu</td>
                        <td>$100</td>
                        <td>Approved</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>02/15/2023</td>
                        <td>Param Patil</td>
                        <td>Flu</td>
                        <td>$100</td>
                        <td>Approved</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>02/15/2023</td>
                        <td>Param Patil</td>
                        <td>Flu</td>
                        <td>$100</td>
                        <td>Approved</td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>02/15/2023</td>
                        <td>Param Patil</td>
                        <td>Flu</td>
                        <td>$100</td>
                        <td>Approved</td>
                      </tr>
                      <tr>
                        <th scope="row">6</th>
                        <td>02/15/2023</td>
                        <td>Param Patil</td>
                        <td>Flu</td>
                        <td>$100</td>
                        <td>Approved</td>
                      </tr>
                      <tr>
                        <th scope="row">7</th>
                        <td>02/15/2023</td>
                        <td>Param Patil</td>
                        <td>Flu</td>
                        <td>$100</td>
                        <td>Approved</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Trial end */}
        </section>
      </div>
    </div>
  );
};

export default DoctorDashboard;
