import React from "react";
import general from "./../../images/general.png";
import premium from "./../../images/prem.jpg";
import accident from "./../../images/accident.jpg";
import Card from "./Card";

const Insurances = () => {
  return (
    <div className="container-fluid w-100 p-3 d-flex flex-column">
      <h1 className="fw-bold text-center display-1 text-dark mb-5">Insurances</h1>

      <div className="d-flex justify-content-start flex-wrap">
        <Card
          imageSrc={general}
          title={"General insurance"}
          details={
            "Hospitalizations with or without surgery.\nIntensive care or Critical care.\nSee more details..."
          }
        />

        <Card
          imageSrc={premium}
          title={"Premium insurance"}
          details={
            "Emergency room visits. \n Ambulance services.\n see more details..."
          }
        />
        <Card
          imageSrc={accident}
          title={"Accident insurance"}
          details={
            "provides cash payments to help cover medical expenses not covered by your health insurance plan and out-of-pocket costs from an injury or accident.\n see more details..."
          }
        />
      </div>
    </div>
  );
};

export default Insurances;
