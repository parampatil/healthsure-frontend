import React from 'react'
import './Patient.css'

// FIND YOUR INSURANCE PROVIDER
const PatientProfile = () => {
  return (
    <div>
<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                        <h1 className="h2">Find Your Insurance Provider</h1>
                    </div>
    <div className="search-form">
                      <form>
                        <label htmlFor="specialty">Choose Your Date of Doctor Visit:</label>
                        <input type="date"></input>
                        <hr></hr>
                        <label htmlFor="insurance">Choose Your Insurance Provider:</label>
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
                    
                
                    <div className="search-results">
                      <h2>Search Results</h2>
                      <p>[Choose a result to proceed with claim request]</p>
                      <br></br>
                      <ul>
                        <li>
                          <h3>Dr. Param Patil</h3>
                          <p>Cardiologist</p>
                          <p>Date of Visit: 02/15/2023</p>
                          <p>Insurance: Blue Cross, Medicare</p>
                        </li>
                        <li>
                          <h3>Dr. Sumanth</h3>
                          <p>Dermatologist</p>
                          <p>Date of Visit: 03/15/2023</p>
                          <p>Insurance: Blue Cross, Medicare</p>
                          <p>Rating: 5/5</p>
                        </li>
                      </ul>
                    </div>
      </div>
      </div>
  )
}

export default PatientProfile