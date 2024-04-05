import React from "react";
import Img1 from "../asset/icons8-bicycle-96.png";
import Img2 from "../asset/icons8-motorcycle-delivery-single-box-100.png";
import Img3 from "../asset/icons8-car-100 1.png";
import Img4 from "../asset/icons8-in-transit-100.png";
import "../css/services.css";

const services = () => {
  return (
    <div className="services-content">
      <span>
        How We <br /> Serve You
      </span>
      <div className="delivery">
        <div>
          <img src={Img1} alt="bicycle-delivery" />
          <p>Bicyle Delivery</p>
        </div>
        <div>
          <img src={Img2} alt="motorcycle-delivery" />
          <p>Motorcycle Delivery</p>
        </div>
        <div>
          <img src={Img3} alt="car-delivery" />
          <p>Car Delivery</p>
        </div>
        <div>
          <img src={Img4} alt="van-delivery" />
          <p>Van Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default services;
