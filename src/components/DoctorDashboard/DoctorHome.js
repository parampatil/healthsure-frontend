import React, { useState } from "react";

const DoctorHome = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patient: "John Doe",
      date: "2023-05-01",
      duration: 30,
      status: "Scheduled",
      doctor: "Dr. Jane Smith",
      notes: "Patient complaining of headache",
      prescription: "",
      diagnosis: "",
    },
    {
      id: 2,
      patient: "Jane Smith",
      date: "2023-05-03",
      duration: 60,
      status: "Scheduled",
      doctor: "Dr. Jane Smith",
      notes: "",
      prescription: "",
      diagnosis: "",
    },
    {
      id: 3,
      patient: "Bob Johnson",
      date: "2023-05-06",
      duration: 45,
      status: "Completed",
      doctor: "Dr. John Doe",
      notes: "Patient had high blood pressure",
      prescription: "Aspirin",
      diagnosis: "Hypertension",
    },
  ]);

  const [selectedDate, setSelectedDate] = useState(new Date().toJSON().slice(0, 10));

  const handleDateChange = (event) => {
    console.log(event.target.value);
    setSelectedDate(event.target.value);
  };

  const filteredAppointments = appointments.filter(
    (appointment) =>
      appointment.date === selectedDate
  );

  const upcomingAppointments = appointments.filter(
    (appointment) => appointment.status === 'Scheduled'
  );
  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Doctor Dashboard</h1>

      <div className="row">
        <div className="col-md-4 mb-7">
          <div className="card">
            <div className="card-body">
              
              
              <div className="form-group">
              <img src="https://images.edrawmax.com/images/knowledge/line-graph-1-what-is.jpg" width="350" 
     height="250"></img>
                
              </div>
            </div>
          </div>

          <div className="row">
          <div className="col-sm-md-15 mb-7">
          <div className="card">
            <div className="card-body">
              
              
              <div className="form-group">
              
                <h5 className="card-title">Calendar</h5>
                <label htmlFor="date-input">Select a date:</label>
                <input
                  type="date"
                  id="date-input"
                  className="form-control"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </div>
              </div>
              </div>
              </div>
              <div >
          <div className="row">
            <div className="col col-xl-200">
          <div className="card xl">
            
            <div className="card-body">
            <h5 className="card-title">Appointment History</h5>
              <table className="table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Patient</th>
                    <th>Doctor</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment) => (
                    <tr key={appointment.id}>
                      <td>{appointment.date}</td>
                      <td>{appointment.date}</td>
                      <td>{appointment.patient}</td>
                      <td>{appointment.doctor}</td>
                      <td>{appointment.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>


              
            </div>
            </div>
          </div>
              </div>
              </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  
                  <h5 className="card-title">Upcoming Appointments</h5>
                  <ul className="list-group list-group-flush">
                    {upcomingAppointments.length === 0 ? (
                      <li className="list-group-item">
                        No upcoming appointments
                      </li>
                    ) : (
                      upcomingAppointments.map((appointment) => (
                        <li className="list-group-item" key={appointment.id}>
                          {appointment.date} for
                          {appointment.duration} min -
                          {appointment.patient}
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-5">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Patient Statistics</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Total patients: 120</li>
                    <li className="list-group-item">
                      New patients this month: 10
                    </li>
                    <li className="list-group-item">
                      Patients last month: 100
                    </li>
                    <li className="list-group-item">Patients this week: 5</li>
                    <li className="list-group-item">Patients today: 2</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="card xl">
            <div className="card-body">
            <h5 className="card-title">
                Appointments for {selectedDate}
              </h5>
              <table className="table">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Patient</th>
                    <th>Doctor</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAppointments.length === 0 ? (
                    <tr>
                      <td colSpan="4">No appointments for selected date</td>
                    </tr>
                  ) : (
                    filteredAppointments.map((appointment) => (
                      <tr key={appointment.id}>
                        <td>
                          {appointment.date}
                        </td>
                        <td>{appointment.patient}</td>
                        <td>{appointment.doctor}</td>
                        <td>{appointment.duration} min</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorHome;
