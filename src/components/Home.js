import React, { useState, useEffect, Fragment } from "react";

import UserService from "../services/user.service";

import Banner from "./LandingPage/Banner/Banner"
import Search from "./LandingPage/Search/Search";
import Footer from './LandingPage/Footer/Footer';
import Explore from './LandingPage/Explore/Explore';
import Adventure from './LandingPage/Adventure/Adventure';
import Booking from './LandingPage/Booking/Booking';
import Gallery from './LandingPage/Gallery/Gallery';
import Contact from './LandingPage/Contact/Contact';

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data.quote);
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
    <div>
      {/* <header className="jumbotron">
        <h3>{content}</h3>
      </header> */}
      <Fragment>
        {/* <Banner /> */}
        <Search />
        <Explore />
        <Adventure />
        <Booking />
        <Gallery />
        <Contact />
        <Footer />
      </Fragment>
    </div>
  );
};

export default Home;
