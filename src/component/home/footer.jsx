import React from "react";
import logo from "../asset/Hive-logo.png";
import img1 from "../asset/Frame 85.png";
import img2 from "../asset/Frame 87.png";
import img3 from "../asset/Frame 86.png";
import "../css/footer.css";

const footer = () => {
  return (
    <footer>
      <div className="footer">
        <span className="logo">
          <img src={logo} alt="" />
        </span>
        <div className="footerword">
          <h1 className="basics">Basics</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit. <br />
            Integer vel libero at lacus faucibus bibendum. <br /> Vestibulum
            dapibus lacinia arcu,
            <br /> in fermentum magna vestibulum a.
          </p>
        </div>
        <div className="footerword">
          <h1>Partners</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            Integer vel <br />
            libero at lacus faucibus bibendum. <br /> Vestibulum dapibus lacinia
            arcu,
            <br /> in fermentum magna vestibulum a.
          </p>
        </div>
        <div className="footerword">
          <h1>Resources</h1>
          <p>
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit. <br /> Integer vel libero at lacus
            faucibus bibendum. <br /> Vestibulum dapibus lacinia arcu, <br /> in
            fermentum magna vestibulum a.
          </p>
        </div>
        <div className="socialmedia">
          <h1>follows</h1>
          <a
            href="https://example.com/facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={img1} alt="Facebook" />
          </a>
          <a
            href="https://example.com/twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={img2} alt="Twitter" />
          </a>
          <a
            href="https://example.com/instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={img3} alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default footer;
