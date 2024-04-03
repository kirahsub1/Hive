import React from 'react';
import "../css/hero.css";
import img1 from "../asset/world-map.png"
 
const hero = () => {
  return (
    <section className='hero'>
      <div className='hero-content'>
        <h1>Logistics mode <br /> simple, Reliable & <br /> Efficient</h1>
        <p>Experience the fastest service <br /> Everything delivered to your doorstep</p>
        <img src={img1} alt="hero-img" />
      </div>
    </section>
  );
}

export default hero
