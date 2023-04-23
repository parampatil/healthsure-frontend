import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const PatientAppointments = () => {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [doctor, setDoctor] = useState("");

  const handleSelect = ({ start, end }) => {
    const title = window.prompt("Enter Appointment Title:");
    const selectedDoctor = window.prompt("Please select a doctor:");
    setDoctor(selectedDoctor)
    if (title && selectedDoctor) {
      setEvents([...events, { start, end, title, selectedDoctor }]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && start && end && doctor) {
      setEvents([...events, { title, start, end, doctor }]);
      setTitle("");
      setStart("");
      setEnd("");
      setDoctor("");
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleStartChange = (e) => {
    setStart(e.target.value);
  };

  const handleEndChange = (e) => {
    setEnd(e.target.value);
  };

  const handleDoctorChange = (e) => {
    setDoctor(e.target.value);
  };

  const handleDelete = (eventToDelete) => {
    const filteredEvents = events.filter(
      (event) =>
        event.title !== eventToDelete.title ||
        event.start.getTime() !== eventToDelete.start.getTime() ||
        event.end.getTime() !== eventToDelete.end.getTime()
    );
    setEvents(filteredEvents);
  };

  return (
    <div>
      {/* <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 className="h2">Find Your Doctor</h1>
      </div>
      <div className="search-form">
        <form>
          <label htmlFor="specialty">
            What Specialty are you looking htmlFor?:
          </label>
          <select id="specialty" name="specialty">
            <option value="">--Select Specialty--</option>
            <option value="cardiology">Cardiology</option>
            <option value="dermatology">Dermatology</option>
            <option value="endocrinology">Endocrinology</option>
          </select>

          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location"></input>

          <label htmlFor="insurance">Insurance:</label>
          <select id="insurance" name="insurance">
            <option value="">--Select Insurance--</option>
            <option value="aetna">Aetna</option>
            <option value="blue-cross">Blue Cross</option>
            <option value="cigna">Cigna</option>
            <option value="humana">Humana</option>
            <option value="medicare">Medicare</option>
            <option value="united-healthcare">United Healthcare</option>
          </select>

          <button type="submit">Search</button>
        </form>
      </div>

      <div className="search-results">
        <h2>Search Results</h2>
        <ul>
          <li>
            <h3>Dr. Ketul Patil</h3>
            <p>Cardiologist</p>
            <p>123 College Mall, IN, USA</p>
            <p>Blue Cross, Medicare</p>
            <p>Rating: 4.7/5</p>
          </li>
          <li>
            <h3>Dr. Sumanth</h3>
            <p>Dermatologist</p>
            <p>456 Hoosier Choice, IN, USA</p>
            <p>Blue Cross, Medicare</p>
            <p>Rating: 5/5</p>
          </li>
        </ul>
      </div> */}

      {/* New Code */}
      <div className="container mt-5">
        <h1 className="text-center mb-5">Appointment Booking Page</h1>
        <div className="row">
          <div className="col-md-8">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              selectable
              onSelectSlot={handleSelect}
              style={{ height: "70vh" }}
            />
          </div>
          <div className="col-md-4">
            <h3>Add Appointment</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input
                  id="title"
                  type="text"
                  className="form-control"
                  value={title}
                  onChange={handleTitleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="start">Start Time:</label>
                <input
                  id="start"
                  type="datetime-local"
                  className="form-control"
                  value={start}
                  onChange={handleStartChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="end">End Time:</label>
                <input
                  id="end"
                  type="datetime-local"
                  className="form-control"
                  value={end}
                  onChange={handleEndChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="doctor">Doctor:</label>
                <select
                  id="doctor"
                  className="form-control"
                  value={doctor}
                  onChange={handleDoctorChange}
                >
                  <option value="">Select a doctor</option>
                  <option value="Dr. Smith">Dr. Smith</option>
                  <option value="Dr. Johnson">Dr. Johnson</option>
                  <option value="Dr. Lee">Dr. Lee</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
            <h3 className="mt-5">Appointments</h3>
            <ul className="list-group">
              {events.map((event, index) => (
                <li key={index} className="list-group-item">
                  <div>
                    <strong>{event.title}</strong>
                    {/* <div>
                      Doctor - <strong>{event.doctor}</strong>
                    </div> */}
                  </div>
                  <div>
                    <small>
                      {moment(event.start).format("MMMM Do YYYY, h:mm a")} -{" "}
                      {moment(event.end).format("h:mm a")}
                    </small>
                  </div>
                  <button
                    className="btn btn-danger btn-sm mt-2"
                    onClick={() => handleDelete(event)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientAppointments;
