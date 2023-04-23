import React from 'react'
import './Insurance.css'

const InsuranceProfile = () => {
  return (
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        
    <div className="patient-dashboard">
        <div className="patient-dashboard">
          <h3>Patient Details</h3>
          <div className="row mb-3">
              <div className="col-md-6">
                  <button className="btn btn-primary" data-toggle="modal" data-target="#addPatientModal">
                      <i className="fa fa-plus"></i>
                      Add New Patient
                  </button>
              </div>
              <div className="col-md-6">
                  <form className="form-inline float-md-right">
                      <div className="form-group">
                          <label htmlFor="search" className="sr-only">Search</label>
                          <input type="text" className="form-control" id="search" placeholder="Search by first name"></input>
                      </div>
                      <button type="submit" className="btn btn-default"><i className="fas fa-search"></i></button>
                  </form>
              </div>
          </div>
              <table className="table">
                      <thead>
                          <tr>
                              <th>Patient Name</th>
                              <th>Phone</th>
                              <th>Address</th>
                              <th>Insurance Covered</th>
                              <th></th>
                          </tr>
                      </thead>
                          <tbody>
                              <tr>
                                  <td>Abhijith Dameruppala</td>
                                  <td>123-456-7890</td>
                                  <td>Luddy, Indiana University</td>
                                  <td>Yes</td>
                                  <td><button className="btn btn-primary">Medical History</button></td>
                                  <td><button className="btn btn-secondary">Edit Profile</button></td>
                                  <td><button className="btn btn-danger">Delete Profile</button></td>
                              </tr>
                              <tr>
                                  <td>Karthikay Kumar</td>
                                  <td>123-456-7890</td>
                                  <td>Kelly, Indiana University</td>
                                  <td>Yes</td>
                                  <td><button className="btn btn-primary">Medical History</button></td>
                                  <td><button className="btn btn-secondary">Edit Profile</button></td>
                                  <td><button className="btn btn-danger">Delete Profile</button></td>
                              </tr>
                              <tr>
                                <td>Param Patil</td>
                                <td>123-456-7890</td>
                                <td>Kelly, Indiana University</td>
                                <td>Yes</td>
                                <td><button className="btn btn-primary">Medical History</button></td>
                                <td><button className="btn btn-secondary">Edit Profile</button></td>
                                <td><button className="btn btn-danger">Delete Profile</button></td>
                            </tr>
                            <tr>
                              <td>Sumanth Muvva</td>
                              <td>123-456-7890</td>
                              <td>Kelly, Indiana University</td>
                              <td>No</td>
                              <td><button className="btn btn-primary">Medical History</button></td>
                              <td><button className="btn btn-secondary">Edit Profile</button></td>
                              <td><button className="btn btn-danger">Delete Profile</button></td>
                          </tr>
                          <tr>
                            <td>Sri Ram</td>
                            <td>123-456-7890</td>
                            <td>Kelly, Indiana University</td>
                            <td>Yes</td>
                            <td><button className="btn btn-primary">Medical History</button></td>
                            <td><button className="btn btn-secondary">Edit Profile</button></td>
                            <td><button className="btn btn-danger">Delete Profile</button></td>
                        </tr>
                        <tr>
                          <td>Ketul Patil</td>
                          <td>123-456-7890</td>
                          <td>Kelly, Indiana University</td>
                          <td>No</td>
                          <td><button className="btn btn-primary">Medical History</button></td>
                          <td><button className="btn btn-secondary">Edit Profile</button></td>
                          <td><button className="btn btn-danger">Delete Profile</button></td>
                      </tr>
                          </tbody>
                  </table>
            </div>
    </div>
    </div>
  )
}

export default InsuranceProfile