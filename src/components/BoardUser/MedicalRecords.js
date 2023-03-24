import React, { useState, useEffect } from "react";

import UserService from "../../services/user.service";
import EventBus from "../../common/EventBus";

import "./MedicalRecords.css"

const MedicalRecords = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return(
        <div className="medical-records">
            <div className="medical-records-header">
                <h1 className="medical-records-header-title">Medical Records</h1> 
            </div>

            <table>
            <thead>
                <tr>
                <th>Date</th>
                <th>Doctor</th>
                <th>Diagnosis</th>
                <th>Treatment</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>01/01/2023</td>
                <td>Dr. Sri Ram</td>
                <td>High blood pressure</td>
                <td>Prescribed medication</td>
                </tr>
                <tr>
                <td>02/15/2023</td>
                <td>Dr. Param Patil</td>
                <td>Flu</td>
                <td>Prescribed rest and fluids</td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default MedicalRecords;