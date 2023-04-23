import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const API_URL = "https://content.guardianapis.com/search?q=";
const API_KEY =
  "&show-fields=thumbnail&api-key=37fa5589-b14f-4c75-83a0-3ec2d55d294b";

const News = () => {
  const [newsCards, setNewsCards] = useState();

  useEffect(() => {
    axios.get(API_URL + "covid" + API_KEY).then((response) => {
      setNewsCards(response.data.response.results.map((cardData, index) => (
        <Card
          imageSrc={cardData.fields.thumbnail}
          title={cardData.webTitle}
          details={new Date(cardData.webPublicationDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          linkUrl={cardData.webUrl}
        />
      )))
    });
  }, []);

 

  return (
    <div className="container-fluid w-100 p-3 d-flex flex-column">
      <h1 className="fw-bold text-center display-1 text-dark mb-5">News</h1>

      <div className="container-fluid">
        <div className="d-flex justify-content-start flex-wrap">
          {newsCards}
        </div>
      </div>
    </div>
  );
};

export default News;
