import React from 'react'
import './Insurance.css'

const InsuranceAppointments = () => {
  return (
    <div className="patient-dashboard">
    <h3>Insurance Claims</h3>
    <table className="table">
        <thead>
            <tr>
                <th>Patient Name</th>
                <th>Date</th>
                <th>Doctor</th>
                <th>Diagnosis</th>
                <th>Amount</th>
                <th>Status</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Abhijith Dameruppala</td>
                <td>01/01/2023</td>
                <td>Dr. Sri Ram</td>
                <td>High blood pressure</td>
                <td>$50</td>
                <td>Pending</td>
                <td>
                    <button type="button" className="btn btn-success">Approve</button>
                </td>
                <td>
                    <button type="button" className="btn btn-danger">Deny</button>
                </td>
            </tr>
            <tr>
                <td>john wick</td>
                <td>01/01/2023</td>
                <td>Dr. Sri krishna</td>
                <td>heart attack</td>
                <td>$500</td>
                <td>Pending</td>
                <td>
                    <button type="button" className="btn btn-success">Approve</button>
                </td>
                <td>
                    <button type="button" className="btn btn-danger">Deny</button>
                </td>
            </tr>
            <tr>
                <td>Tony stark</td>
                <td>15/09/2023</td>
                <td>Dr. Amy santiago</td>
                <td>Food poisoning</td>
                <td>$150</td>
                <td>Pending</td>
                <td>
                    <button type="button" className="btn btn-success">Approve</button>
                </td>
                <td>
                    <button type="button" className="btn btn-danger">Deny</button>
                </td>
            </tr>
            </tbody>
          </table>
</div>
  )
}

export default InsuranceAppointments