import React, { useState, useEffect } from "react";

import UserService from "../../services/user.service";

import AdvertisementCarousel from "./AdvertisementCarousel";
import Services from "./Services";
import Insurances from "./Insurances";
import AboutUs from "./AboutUs";
import News from "./News";
import Contact from "./Contact";
import GlobalSearch from "../PatientDashboard/GlobalSearch";
import Footer from "./Footer";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container-fluid w-100 p-0">
      {/* <header className="jumbotron">
        <h3>{content}</h3>
      </header> */}
      <AdvertisementCarousel />
      {/* <GlobalSearch /> */}
      <Services />
      <Insurances />
      <AboutUs />
      <News />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
