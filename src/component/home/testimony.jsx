import React from 'react'
import Img0 from "../asset/Ellipse 26.png";
import Img1 from "../asset/Ellipse 26.png";
import Img2 from "../asset/Ellipse 26.png";
import "../css/testimony.css"
const testimony = () => {
  return (
    <div class="testimony">
      <section className='peak'>
        <h2>Testimonials</h2>
        <p>
          We have created a seamless process that can follow <br /> to ship your
          orders and receive your orders promptly.
        </p>
      </section>
      <div className="test">
        <img src={Img0} alt="Review" />
        <p className='yemi'>yemisi</p>
        <p>
          Thank you HIVE! <br />
          What service delivery <br />
          It was superfast
        </p>
      </div>

      <div className="test">
        <img src={Img1} alt="Review" />
        <p className='yemi'> Yemisi</p>
        <p>
          Thank you HIVE! <br />
          What service delivery <br />
          It was superfast
        </p>
      </div>

      <div className="test">
        <img src={Img2} alt="Review" />
        <p className='yemi'>Yemisi</p>
        <p>
          Thank you HIVE! <br />
          What service delivery <br />
          It was superfast
        </p>
      </div>
    </div>
  );
}

export default testimony
