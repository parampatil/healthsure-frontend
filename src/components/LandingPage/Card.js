import React from "react";
import { Link } from "react-router-dom";

const Card = ({ imageSrc, title, details, linkUrl }) => {
  return (
    <div className="container mb-5" style={{width: "28rem"}}>
      <div className="card h-100 rounded">
        <img src={imageSrc} height="360px" width="60px" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{details.split("\n").map((line, index) => {
            return <React.Fragment key={index}>{line}<br/></React.Fragment>
          })}</p>
          <Link to={linkUrl} className="btn btn-primary">See more details</Link>
        </div>
      </div>
    </div>
  );
}

export default Card;