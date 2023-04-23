import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { register } from "../../actions/auth";

import TermsAndConditions from "./Terms/TermsAndConditions";
import TermsOfUse from "./Terms/TermsOfUse";

const Register = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordrepeat, setPasswordRepeat] = useState("");
  const [role, setRole] = useState("");
  const [license, setLicense] = useState("");
  const [tandc, setTandc] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangePasswordRepeat = (e) => {
    const password = e.target.value;
    setPasswordRepeat(password);
  };

  const onChangeRole = (e) => {
    const role = e.target.value;
    setRole(role);
  };

  const onChangeLicense = (e) => {
    const license = e.target.value;
    setLicense(license);
  };

  const onChangeTandc = (e) => {
    const tandc = e.target.value;
    setTandc(tandc);
  };

  // Validations
  const required = (value) => {
    console.log(value)
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

  const validEmail = (value) => {
    if (!isEmail(value)) {
      return (
        <div className="alert alert-danger" role="alert">
          This is not a valid email.
        </div>
      );
    }
  };

  const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          The username must be between 3 and 20 characters.
        </div>
      );
    }
  };

  const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="alert alert-danger" role="alert">
          The password must be between 6 and 40 characters.
        </div>
      );
    }
  };

  const vpasswordrepeat = (value) => {
    if (value !== password) {
      return (
        <div className="alert alert-danger" role="alert">
          The password is not same as previously entered.
        </div>
      );
    }
  };

  const vLicense = (value) => {
    if (value.length < 6 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          The License must be between 6 and 20 characters.
        </div>
      );
    }
  };

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
      {/* <!-- Pills content --> */}
      <div>
          <Form onSubmit={handleRegister} ref={form}>
            {!successful && (
              <div>
                <div className="text-center mb-3">
                  <p>Sign up with:</p>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fa fa-facebook-f"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fa fa-google"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fa fa-twitter"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fa fa-github"></i>
                  </button>
                </div>

                <p className="text-center">or:</p>

                {/* <!-- Name input --> */}
                <div className="form-outline mb-4">
                  <Input
                    type="text"
                    id="registerName"
                    className="form-control"
                    name="name"
                    value={name}
                    // onChange={onChangeName}
                    validations={[required]}
                  />
                  <label className="form-label" htmlFor="registerName">
                    Name
                  </label>
                </div>

                {/* <!-- Username Input --> */}
                <div className="form-outline mb-4">
                  <Input
                    type="text"
                    id="registerUsername"
                    className="form-control"
                    name="username"
                    value={username}
                    // onChange={onChangeUsername}
                    // validations={[required, vusername]}
                  />
                  <label className="form-label" htmlFor="registerUsername">
                    Username
                  </label>
                </div>

                {/* <!-- Email Input --> */}
                <div className="form-outline mb-4">
                  <Input
                    type="email"
                    id="registerEmail"
                    className="form-control"
                    name="email"
                    value={email}
                    // onChange={onChangeEmail}
                    // validations={[required, validEmail]}
                  />
                  <label className="form-label" htmlFor="registerEmail">
                    Email
                  </label>
                </div>

                {/* <!-- Password Input --> */}
                <div className="form-outline mb-4">
                  <Input
                    type="password"
                    id="registerPassword"
                    className="form-control"
                    name="password"
                    value={password}
                    // onChange={onChangePassword}
                    // validations={[required, vpassword]}
                  />
                  <label className="form-label" htmlFor="registerPassword">
                    Password
                  </label>
                </div>

                {/* <!-- Repeat Password Input --> */}
                <div className="form-outline mb-4">
                  <Input
                    type="password"
                    id="registerRepeatPassword"
                    className="form-control"
                    name="passwordrepeat"
                    value={passwordrepeat}
                    // onChange={onChangePasswordRepeat}
                    // validations={[required, vpasswordrepeat]}
                  />
                  <label
                    className="form-label"
                    htmlFor="registerRepeatPassword"
                  >
                    Repeat password
                  </label>
                </div>

                {/* <!-- Role Input --> */}
                <div className="form-outline mb-4">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="role"
                    value={role}
                    // onChange={onChangeRole}
                    validations={[required]}
                  >
                    <option value="1">Patient</option>
                    <option value="2">Doctor</option>
                    <option value="3">Insurance Provider</option>
                  </select>
                  <label className="form-label" htmlFor="registerRole">
                    Select Role
                  </label>
                </div>

                {/* <!-- License Input --> */}
                <div className="form-outline mb-4">
                  <Input
                    type="text"
                    id="registerLicense"
                    className="form-control"
                    name="license"
                    value={license}
                    // onChange={onChangeLicense}
                    // validations={[required, vLicense]}
                  />
                  <label className="form-label" htmlFor="registerLicense">
                    License Number
                  </label>
                </div>

                {/* <!-- Checkbox --> */}
                <div className="form-check d-flex justify-content-center mb-4">
                  <Input
                    className="form-check-Input me-2"
                    type="checkbox"
                    id="registerCheck"
                    aria-describedby="registerCheckHelpText"
                    name="tandc"
                    value={tandc}
                    // onChange={onChangeTandc}
                    validations={[required]}
                  />
                  <label className="form-check-label" htmlFor="registerCheck">
                    I have read and agree to the{" "}
                    <a data-bs-toggle="modal" href="#exampleModalToggle">
                      terms
                    </a>
                  </label>
                </div>

                {/* <!-- Submit button --> */}
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-3"
                >
                  Sign Up
                </button>
              </div>
            )}
          </Form>
          <div>
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
                    <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
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
                    <button className="btn btn-primary" data-bs-dismiss="modal">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            </div>

        {message && (
          <div className="form-group">
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
      </div>
      {/* <!-- Pills content --> */}

      {/* Modals htmlFor Terms and conditions*/}

      {/* Modals for Terms and conditions end*/}
    </div>

   
  );
};

export default Register;
