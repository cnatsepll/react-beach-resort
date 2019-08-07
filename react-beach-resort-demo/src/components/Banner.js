import React from 'react'
// exporting a prominent identifier box with text and a call to action button
const Banner = ({ children, title, subtitle }) => {
    return (
      <div className="banner">
        <h1>{title}</h1>
        <div />
        <p>{subtitle}</p>
        {children}
      </div>
    );
  };
  
  export default Banner;