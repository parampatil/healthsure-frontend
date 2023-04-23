import React from 'react'

const AboutUs = () => {
  return (
    <div className="container-fluid bg-grey p-3 d-flex justify-content-around bg-light">
      <div className="row">
        <div className="col-sm-4 d-flex align-items-center">
          <span className="fa fa-globe display-1 text-success"></span>
        </div>
        <div className="col-sm-8">
        <h2>About Us</h2>
          <p>We are a team of experienced medical professionals dedicated to providing the highest quality care to our patients.</p>
          <p>Our patient-doctor portal is designed to make it easy for you to manage your health and communicate with your healthcare providers.</p>
          <p>Whether you need to schedule an appointment, refill a prescription, or review your medical history, our portal has everything you need.</p>
          <p>Thank you for choosing us as your healthcare provider.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs