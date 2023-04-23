import React from "react";

const DoctorAppointments = () => {
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 className="h2">My Appointments [Doctor]</h1>
      </div>
      <div className="patient-dashboard">
        <div className="container mt-5">
          {/* <h1></h1> */}
          <form className="my-4">
            <div className="form-row">
              <div className="col-3">
                <label htmlFor="appointment-date">Appointment Date:</label>
                <input
                  type="date"
                  id="appointment-date"
                  className="form-control"
                ></input>
              </div>
              <div className="col-3">
                <label htmlFor="submit-button">&nbsp;</label>
                <button
                  id="submit-button"
                  type="submit"
                  className="btn btn-primary btn-block"
                >
                  Search
                </button>
              </div>
            </div>
          </form>

          <div className="search-results">
            <h2>Search Results</h2>
            <p>[Choose an appointment to view details]</p>
            <br></br>
            <ul>
              <li type="button" class="btn btn-light">
                <h3>John Doe</h3>
                <p>chest pain</p>
                <p>Appointment Date: 03/27/2023</p>
                <p>Time: 3:00 PM</p>
              </li>
              <li type="button" class="btn btn-light">
                <h3>John Doe</h3>
                <p>chest pain</p>
                <p>Appointment Date: 03/27/2023</p>
                <p>Time: 3:00 PM</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointments;
