import React from 'react'
import Img1 from "../asset/lady-tracking.png"
import "../css/tracking.css"

const tracking = () => {
  return (
    <div className='track'>
      <div className="">
        <img src={Img1} alt="Lady-tracking" />
        </div>
        <div className="track1">
          <h1>Track Your Package On The Go! </h1>
          <p>
            We have created a seamless process that can follow to ship your
            orders and receive your orders promptly.
          </p>
          <button className="button">{"Track"}</button>
          <input
            type="text"
            className="input-field"
            placeholder="Enter Tracking code here"
            autoComplete="off"
          />
      </div>
    </div>
  );
}

export default tracking
