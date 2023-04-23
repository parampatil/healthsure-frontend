import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { loginOauth } from "../../actions/auth";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { register } from "../../actions/auth";

import TermsAndConditions from "./Terms/TermsAndConditions";
import TermsOfUse from "./Terms/TermsOfUse";

// Validations

const Register = () => {
  let navigate = useNavigate();
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tandc, setTandc] = useState("");
  const [license, setLicense] = useState("");
  const [role, setRole] = useState("");

  const [successful, setSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  // Google Auth
  const handleGoogleClick = (e) => {
    e.preventDefault();

    dispatch(loginOauth("google"))
      .then(() => {
        navigate("/profile");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  // Facebook Auth
  const handleFacebookClick = (e) => {
    e.preventDefault();

    dispatch(loginOauth("facebook"))
      .then(() => {
        navigate("/profile");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  // Facebook Auth
  const handleGithubClick = (e) => {
    e.preventDefault();

    dispatch(loginOauth("github"))
      .then(() => {
        navigate("/profile");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  // Twitter Auth
  const handleTwitterClick = (e) => {
    e.preventDefault();

    dispatch(loginOauth("twitter"))
      .then(() => {
        navigate("/profile");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  // Signup Handle
  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(username, email, password))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };

  return (
    <div>
      <div className="container">
        <div className="text-center mb-3">
          <p>Sign up with:</p>
          <button
            type="button"
            className="btn btn-link btn-floating mx-1"
            onClick={handleFacebookClick}
          >
            <i className="fa fa-facebook-f"></i>
          </button>

          <button
            type="button"
            className="btn btn-link btn-floating mx-1"
            onClick={handleGoogleClick}
          >
            <i className="fa fa-google"></i>
          </button>

          <button
            type="button"
            className="btn btn-link btn-floating mx-1"
            onClick={handleTwitterClick}
          >
            <i className="fa fa-twitter"></i>
          </button>

          <button
            type="button"
            className="btn btn-link btn-floating mx-1"
            onClick={handleGithubClick}
          >
            <i className="fa fa-github"></i>
          </button>
        </div>

        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div className="form-">
              <div className="form-group mb-4">
                <Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  required
                />
                <label htmlFor="username">Username</label>
              </div>

              <div className="form-group mb-4">
                <Input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="form-group mb-4">
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
                <label htmlFor="password">Password</label>
              </div>

              <div className="form-group mb-4">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="role"
                  value={role}
                  onChange={(event) => setRole(event.target.value)}
                  required
                >
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                  <option value="insurance">Insurance Provider</option>
                </select>
                <label className="form-label" htmlFor="registerRole">
                  Select Role
                </label>
              </div>

              {role === "doctor" && (
                <div className="form-group mb-4">
                  <Input
                    type="text"
                    id="registerLicense"
                    className="form-control"
                    name="license"
                    value={license}
                    onChange={(event) => setLicense(event.target.value)}
                    required
                  />
                  <label className="form-label" htmlFor="registerLicense">
                    License Number
                  </label>
                </div>
              )}

              <div className="form-group mb-4 d-flex justify-content-center">
                <Input
                  className="form-check-Input me-2"
                  type="checkbox"
                  id="registerCheck"
                  aria-describedby="registerCheckHelpText"
                  name="tandc"
                  value={tandc}
                  onChange={(event) => setTandc(event.target.value)}
                  required
                />
                <label className="form-check-label" htmlFor="registerCheck">
                  I have read and agree to the{" "}
                  <a data-bs-toggle="modal" href="#exampleModalToggle">
                    terms
                  </a>
                </label>
              </div>

              <div className="form-group">
                <div
                  className="modal fade"
                  id="exampleModalToggle"
                  aria-hidden="true"
                  aria-labelledby="exampleModalToggleLabel"
                  tabIndex="-1"
                >
                  <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1
                          className="modal-title fs-5"
                          id="exampleModalToggleLabel"
                        >
                          Terms & Conditions
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <TermsAndConditions />
                      </div>
                      <div className="modal-footer">
                        <button
                          className="btn btn-primary"
                          data-bs-target="#exampleModalToggle2"
                          data-bs-toggle="modal"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModalToggle2"
                  aria-hidden="true"
                  aria-labelledby="exampleModalToggleLabel2"
                  tabIndex="-1"
                >
                  <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1
                          className="modal-title fs-5"
                          id="exampleModalToggleLabel2"
                        >
                          Website Terms of Use
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <TermsOfUse />
                      </div>
                      <div className="modal-footer">
                        <button
                          className="btn btn-primary"
                          data-bs-target="#exampleModalToggle"
                          data-bs-toggle="modal"
                        >
                          Back
                        </button>
                        <button
                          className="btn btn-primary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block">Sign Up</button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group my-3">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Register;
