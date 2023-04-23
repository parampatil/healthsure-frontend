import React from 'react'
import carousel_1 from "../../images/carousel_1.png"
import carousel_2 from "../../images/carousel_2.png"
import carousel_3 from "../../images/carousel_3.png"

const AdvertisementCarousel = () => {
  return (
    <div className='container-fluid w-100 p-0 shadow-lg'>
        {/* <h1 className='m-auto'>AdvertisementCarousel</h1> */}
        
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2000">
                    <img src={carousel_1} className="d-block w-100" alt="1" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>World Health Day</h5>
                        <p>Happy World Health Day from the team of HealthSure</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src={carousel_2} className="d-block w-100" alt="2" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Yaga Day</h5>
                        <p>Happy Yoga Day from the team of HealthSure</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={carousel_3} className="d-block w-100" alt="3" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Stop COVID-19</h5>
                        <p>Prevent COVID-19 from spreading.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default AdvertisementCarousel