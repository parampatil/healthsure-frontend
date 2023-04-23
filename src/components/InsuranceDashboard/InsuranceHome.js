import React, { useState } from "react";
import "./Insurance.css";

const InsruanceHome = () => {
  const [policies, setPolicies] = useState([
    { id: 1, name: "Policy 1", status: "Active", premium: 100 },
    { id: 2, name: "Policy 2", status: "Inactive", premium: 200 },
    { id: 3, name: "Policy 3", status: "Active", premium: 300 },
  ]);

  const activePolicies = policies.filter(
    (policy) => policy.status === "Active"
  );

  return (
    <div className="container">
      <h1>Insurance Dashboard</h1>
      <hr className="my-4" />

      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Active Policies</h5>
              <h1 className="card-text">
                <span className="badge bg-primary">
                  {activePolicies.length}
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total Premium</h5>
              <h1 className="card-text">
                ${policies.reduce((total, policy) => total + policy.premium, 0)}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-4" />

      <div className="row">
        <div className="col">
          <h2>All Policies</h2>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Status</th>
                <th>Premium</th>
              </tr>
            </thead>
            <tbody>
              {policies.map((policy) => (
                <tr key={policy.id}>
                  <td>{policy.id}</td>
                  <td>{policy.name}</td>
                  <td>{policy.status}</td>
                  <td>${policy.premium}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InsruanceHome;
