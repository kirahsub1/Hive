import React from 'react'
import Img from "../asset/Rectangle 10.png";
import "../css/about.css"
const about = () => {
  return (
    <div class="container1">
      <div class="team-member">
        <img src={Img} alt="About Us" />
      </div>
      <header>
        <h1>About Us</h1>
      </header>
      <section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
          libero at lacus faucibus bibendum. Vestibulum dapibus lacinia arcu, in
          fermentum magna vestibulum a.
        </p>
      </section>
    </div>
  );
}

export default about
