import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, Link, NavLink } from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login, loginOauth } from "../../actions/auth";


const Login = () => {
  let navigate = useNavigate();

  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

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

  // Email Login
  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(username, password))
        .then(() => {
          navigate("/profile");
          // window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }

  return (
    <div>
      {/* <!-- Pills content --> */}
      <div>
        <div>
          <Form onSubmit={handleLogin} ref={form}>
            <div className="text-center mb-3">
              <p>Sign in with:</p>
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

            <p className="text-center">or:</p>

            {/* <!-- Email input --> */}
            <div className="form-outline mb-4">
              <Input
                id="loginName"
                type="text"
                className="form-control"
                name="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
              />
              <label className="form-label" htmlFor="loginName">
                Email or username
              </label>
            </div>

            {/* <!-- Password input --> */}
            <div className="form-outline mb-4">
              <Input
                type="password"
                id="loginPassword"
                className="form-control"
                name="password"
                value={password}
                onChange={onChangePassword}
                required
              />
              <label className="form-label" htmlFor="loginPassword">
                Password
              </label>
            </div>

            {/* <!-- 2 column grid layout --> */}
            <div className="row mb-4">
              <div className="col-md-6 d-flex justify-content-center">
                {/* <!-- Checkbox --> */}
                <div className="form-check mb-3 mb-md-0">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="loginCheck"
                  />
                  <label className="form-check-label" htmlFor="loginCheck">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
              </div>

              <div className="col-md-6 d-flex justify-content-center">
                {/* <!-- Simple link --> */}
                <Link to={"/resetpassword"}>Forgot password?</Link>
              </div>
            </div>

            {/* <!-- Submit button --> */}
            <button
              className="btn btn-primary btn-block mb-4"
              disabled={loading}
            >
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Sign in</span>
            </button>

            {/* <!-- Register buttons --> */}
            <div className="text-center">
              <p>
                Not a member?{" "}
                <NavLink to="/loginNav/register">Register</NavLink>
              </p>
            </div>

            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}

            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
        </div>
      </div>
      {/* <!-- Pills content --> */}

      {/* <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleLogin} ref={form}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <Input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div> */}
    </div>
  );
};

export default Login;
