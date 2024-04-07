import React from 'react';
import "../css/hero.css";
import img1 from "../asset/bike-guy.png"
import "../css/hero.css"
 
const hero = () => {
  return (
    <div className="hero">
      <span className="hero-image">
        <img src={img1} alt="hero-img" />
      </span>
      <div className="hero-content">
        <h1>
          Logistics mode <br /> simple, Reliable & <br /> Efficient
        </h1>
        <p>
          Experience the fastest service <br /> Everything delivered to your
          doorstep
        </p>
        <a href="#" class="btn">
          Getting Started
        </a>
      </div>
    </div>
  );
}

export default hero
