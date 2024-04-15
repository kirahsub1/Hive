import React from "react";
import Img1 from "../asset/Notepad.png";
import Img2 from "../asset/icons8-camera-100 1.png";
import Img3 from "../asset/money bag.png";
import Img4 from "../asset/icons8-in-transit-100.png";
import "../css/process.css";
const process = () => {
  return (
    <div className="process">
      <div className="textbox">
        <h1>Our Simplified Process</h1>
        <p className="text2">
          We have created a seamless that you can follow to ship your orders
          <br /> and receive your order promptly.
        </p>
      </div>
      <div className="container-box">

        <div className="container1">
          <img src={Img1} alt="notepad" />
          <p>
            Enter the details <br />
            for your shipment
          </p>
        </div>

        <div className="container2">
          <img src={Img2} alt="camera" />
          <p>
            Take the picture <br /> of the item and <br /> upload
          </p>
        </div>

        <div className="container3">
          <img src={Img3} alt="pricing" />
          <p>
            Find quotes for <br /> your delivery and <br /> choose suitable{" "}
            <br /> pricing
          </p>
        </div>

        <div className="container4">
          <img src={Img4} alt="transit" />
          <p>
            Enjoy a safe and <br /> fast delivery
          </p>
        </div>
      </div>
    </div>
  );
};

export default process;
