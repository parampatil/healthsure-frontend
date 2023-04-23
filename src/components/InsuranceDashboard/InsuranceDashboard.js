import React from 'react'
import './Insurance.css'

const InsuranceDashboard = () => {
  return (

    // <div className='container-fluid display-1'>Insurance Home</div>
  <div >
        <h1 className="h2">Dashboard [Insurance Provider]</h1>
    <div className="patient-dashboard">
      <p><button className="btn btn-info">View or Edit Policy</button></p>
      <h3>Total number of Patients covered: <code>5000</code></h3>
      <div className="medical-records">
        <h3>Summary of Recent Approved Claims</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Patient Name</th>
              <th>Doctor Name</th>
              <th>Insurance Claim</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01/01/2023</td>
              <td>Abhijith Dameruppala</td>
              <td>Dr. Param Patil</td>
              <td>$ 50</td>
            </tr>
            <tr>
              <td>02/15/2023</td>
              <td>Karthikay Kumar</td>
              <td>Dr. Ketul Patil</td>
              <td>$ 100</td>
            </tr>
            <tr>
              <td>02/15/2023</td>
              <td>Sumanth Muvva</td>
              <td>Dr. Param Patil</td>
              <td>$ 500</td>
            </tr>
            <tr>
              <td>02/15/2023</td>
              <td>Sri Ram Kumar</td>
              <td>Dr. Ketul Patil</td>
              <td>$ 40</td>
            </tr>
            <tr>
              <td>02/15/2023</td>
              <td>Abhishek Kumar</td>
              <td>Dr. Amitabh Patil</td>
              <td>$ 100</td>
            </tr>
            <tr>
              <td>02/15/2023</td>
              <td>Karthikay Kumar</td>
              <td>Dr. Ketul Patil</td>
              <td>$ 60</td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
    </div>
    )
}



// 
export default InsuranceDashboard