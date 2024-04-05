import React from "react";
import Img1 from "../asset/icons8-bicycle-96.png";
import Img2 from "../asset/icons8-motorcycle-delivery-single-box-100.png";
import Img3 from "../asset/icons8-car-100 1.png";
import Img4 from "../asset/icons8-in-transit-100.png";

const services = () => {
  return (
    <div className="services-content">
      <span>
        <p>How We</p>
        <p>Serve You</p>
      </span>
      <img src={Img1} alt="bicycle-delivery" />
      <img src={Img2} alt="motorcycle-delivery" />
      <img src={Img3} alt="car-delivery" />
      <img src={Img4} alt="van-delivery" />
    </div>
  );
};

export default services;
