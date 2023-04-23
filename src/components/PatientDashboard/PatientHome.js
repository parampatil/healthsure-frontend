import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import docimg1 from "./../../images/doc1.jpg";
import docimg2 from "./../../images/doc2.jpg";
import docimg3 from "./../../images/doc3.jpg";
import docimg4 from "./../../images/doc4.jpg";
import docimg5 from "./../../images/doc5.jpg";
import docimg6 from "./../../images/doc6.jpg";
import docimg7 from "./../../images/doc7.jpg";
import docimg8 from "./../../images/doc8.jpg";
import GlobalSearch from "./GlobalSearch";
import Card from "./Card";

const localizer = momentLocalizer(moment);

const PatientHome = () => {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleSelect = ({ start, end }) => {
    const title = window.prompt("Enter Appointment Title:");
    if (title) {
      setEvents([...events, { start, end, title }]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && start && end) {
      setEvents([...events, { title, start, end }]);
      setTitle("");
      setStart("");
      setEnd("");
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

  return (
    <div className="container-fluid w-100 p-4 d-flex flex-column">
      <GlobalSearch />
      <h1 className="m-auto pb-4">Doctor's Names</h1>
      <div className="d-flex justify-content-start flex-wrap">
        <Card
          imageSrc={docimg1}
          title={"Dr. Lee Cooper."}
          details={"Specialist in cardiology."}
        />
        <Card
          imageSrc={docimg2}
          title={"Dr. David."}
          details={"Specialist in cardiology."}
        />
        <Card
          imageSrc={docimg3}
          title={"Dr. Racheal."}
          details={"Specialist in cardiology."}
        />
        <Card
          imageSrc={docimg4}
          title={"Dr. Green."}
          details={"Specialist in cardiology."}
        />
        <Card
          imageSrc={docimg5}
          title={"Dr. George."}
          details={"Specialist in neurology."}
        />
        <Card
          imageSrc={docimg6}
          title={"Dr. Peter."}
          details={"Specialist in neurology."}
        />
        <Card
          imageSrc={docimg7}
          title={"Dr. Christopher."}
          details={"Specialist in neurology."}
        />
        <Card
          imageSrc={docimg8}
          title={"Dr. Stephen."}
          details={"Specialist in neurology."}
        />
      </div>
    </div>
  );
};
export default PatientHome;
