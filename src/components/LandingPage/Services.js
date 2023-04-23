import React from 'react'
import cardiology from './../../images/card.jpg'
import neurology from './../../images/neu.jpg'
import stomach from './../../images/stomach.jpg'
import Card from "./Card";

const Services = () => {
  return (
    <div className='container-fluid w-100 p-3 d-flex flex-column'>
        <h1 className='fw-bold text-center display-1 text-dark mb-5'>Services</h1>
        
        <div className="d-flex justify-content-start flex-wrap">
                    <Card imageSrc={cardiology} title={"Consulat For cardiology."} details={"See more details."} />
                    <Card imageSrc={neurology} title={"Consulat For neurology."} details={"See more details."} />
                    <Card imageSrc={stomach} title={"Consulat For stomach."} details={"See more details."} />
          </div>
    </div>
  )
}

export default Services