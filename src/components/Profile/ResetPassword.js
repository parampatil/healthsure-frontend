import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [submit, setSubmit] = useState();

  const handleResetPassword = (event) => {
    event.preventDefault();
    // Logic goes here
    setSubmit(true)
  };

  return (
    <div className="container mt-4">
      <h1>Reset Password</h1>
      {submit && <Navigate to="/loginNav" replace={true} />}
      <form onSubmit={handleResetPassword}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
