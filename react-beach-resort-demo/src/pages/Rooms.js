import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
const Rooms = () => {
  return (
    <Hero hero="roomSelectorHero">
      {/* we can initiate the banner without a subtitle,
                        it will be blank */}
      <Banner title="Rooms">
        <Link to="/" className="btn-primary">
          Home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Rooms;
