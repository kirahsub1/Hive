import React from "react";
import Mapimg from "../asset/Frame 658.png";
import "../css/contact.css";

const contact = () => {
  return (
    <div className="contact">
      <div className="words">
        <h1>Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
          libero at lacus faucibus bibendum. Vestibulum dapibus lacinia arcu, in
          fermentum magna vestibulum a.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
          libero at lacus faucibus bibendum. Vestibulum dapibus lacinia arcu, in
          fermentum magna vestibulum a.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
          libero at lacus faucibus bibendum. Vestibulum dapibus lacinia arcu, in
          fermentum magna vestibulum a
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
          libero at lacus faucibus bibendum. Vestibulum dapibus lacinia arcu, in
          fermentum magna vestibulum a
        </p>
      </div>
      <div className="map">
        <img src={Mapimg} alt="contact-page" />
      </div>
    </div>
  );
};

export default contact;
