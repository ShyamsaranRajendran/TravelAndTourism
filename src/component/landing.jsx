import React from "react";
import "./styles/landing.css";
import headerImage from "../assets/boat.jpeg";

const Landing = () => {
  return (
    <div className="App">
     
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <div className="hero-content">
          <p>Discover the Colorful World</p>
          <h1>New Adventure</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
          <button className="discover-button">Discover Now</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
