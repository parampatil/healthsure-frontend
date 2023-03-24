import React, { useState, useEffect } from "react";

import UserService from "../../services/user.service";
import EventBus from "../../common/EventBus";

import "./PatientDetails.css"

const PatientDetails = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return(
        <div className="PatientDetails">
            <div className="PatientDetails-header">
                <h1 className="PatientDetails-header-title">Patient Details</h1>
                
            </div>
            <div className="patient-info">
                <ul>
                    <li>
                    <strong>Name:</strong> {user.firstName + " " + user.lastName}
                    </li>
                    <li>
                    <strong>Gender:</strong> {user.gender}
                    </li>
                    <li>
                    <strong>Age:</strong> 30
                    </li>
                    <li>
                    <strong>Address:</strong> 923 N College Ave, IN, USA
                    </li>
                    <li>
                    <strong>Phone:</strong> 123-420-1234
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PatientDetails;