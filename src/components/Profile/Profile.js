import React from "react";
import { Navigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Navigate to="/loginNav/login" />;
  }

  return (
    <div className="container-fluid w-100">
      <section>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4 shadow-lg rounded">
                <div className="card-body text-center">
                  <img
                    src={currentUser.profileImageURL}
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: "150px" }}
                  />
                  <h5 className="my-3">{currentUser.displayName}</h5>
                  <p className="text-muted mb-1">Admin</p>
                  <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                  <div className="d-flex justify-content-center mb-2">
                    {/* <button type="button" className="btn btn-primary">Follow</button>
                    <button type="button" className="btn btn-outline-primary ms-1">Message</button> */}
                  </div>
                </div>
              </div>
              {/* <div className="card mb-4 mb-lg-0 shadow-lg rounded">
                <div className="card-body p-0">
                  <ul className="list-group list-group-flush rounded-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fa fa-globe fa-lg text-warning"></i>
                      <p className="mb-0">https://mdbootstrap.com</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fa fa-github fa-lg" style={{color: "#333333"}}></i>
                      <p className="mb-0">mdbootstrap</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fa fa-twitter fa-lg" style={{color: "#55acee"}}></i>
                      <p className="mb-0">@mdbootstrap</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fa fa-instagram fa-lg" style={{color: "#ac2bac"}}></i>
                      <p className="mb-0">mdbootstrap</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fa fa-facebook-f fa-lg" style={{color: "#3b5998"}}></i>
                      <p className="mb-0">mdbootstrap</p>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
            <div className="col-lg-8">
              <div className="card mb-4 shadow-lg rounded">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{currentUser.displayName}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0 d-flex align-items-center">
                        {currentUser.email}{" "}
                        {currentUser.emailVerified === "true" && (
                          <i
                            className="fa fa-check fa-lg mx-2"
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
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Password</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0  d-flex align-items-center">
                        **********************
                        <Link to={"/resetpassword"} type="button" className="btn ms-auto">
                          <i className="fa fa-pencil fa-lg" />
                        </Link>
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">(097) 234-5678</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Mobile</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">(098) 765-4321</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card mb-4 mb-md-0 shadow-lg rounded">
                    <div className="card-body">
                      <h3>Roles</h3>
                      <hr />
                      <ul>
                        {/* {currentUser.roles.includes("ROLE_INSURANCE") && (
                          <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                            <i
                              className="fa fa-user fa-lg"
                              style={{ color: "blue" }}
                            ></i>
                            <p className="mb-0">Patient</p>
                          </li>
                        )}

                        {currentUser.roles.includes("ROLE_DOCTOR") && (
                          <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                            <i
                              className="fa fa-user-md fa-lg"
                              style={{ color: "blue" }}
                            ></i>
                            <p className="mb-0">Doctor</p>
                          </li>
                        )}

                        {currentUser.roles.includes("ROLE_PATIENT") && (
                          <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                            <i
                              className="fa fa-id-card-o fa-lg"
                              style={{ color: "blue" }}
                            ></i>
                            <p className="mb-0">Insurance Provider</p>
                          </li>
                        )} */}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card mb-4 mb-md-0 shadow-lg rounded">
                    <div className="card-body">
                      <h3>Membership</h3>
                      <hr />
                      <div className="d-flex align-items-center justify-content-around mb-2">
                        <i
                          className="fa fa-shield fa-5x text-primary"
                          aria-hidden="true"
                        ></i>
                        <h3>Premium Member</h3>
                      </div>
                      <div className="w-100 text-center">
                        <p className="text-muted">Renews on: 12 Jan 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
