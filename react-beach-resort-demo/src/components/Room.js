import React from "react";
import { Link } from "react-router-dom";
// loading an item to use as a default image for the rooms page
import defaultImg from "../images/room-1.jpeg";
// importing library to set component requirements as prop types
import PropTypes from "prop-types";
export default function Room({ room }) {
  const { name, slug, images, price } = room;
  // in the return function below we are choosing to either:
  // go through the imorted images array OR to load the imported default image
  return (
    <article className="room">
      <div className="img-container">
        {/* checking to to see if we were passed any images to use in the page display
          if not, then we will display the deafualt image */}
        <img src={images[0] || defaultImg} alt="single room" />

        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}

// room properties
// accesses the properties of the element object
Room.propTypes = {
  //shape lets us in to the properties
  room: PropTypes.shape({
    // isRequired describes what we expect from the object
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
