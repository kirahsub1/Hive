import React from 'react'
import Img from "../asset/DHL Logo.png";
import "../css/partners.css"

const partners = () => {
  return (
    <div className='partners'>
      <div className='partnertext'>
        <h1>Our Partners</h1>
      </div>
      <div>
        <img src= {Img} alt="" />
      </div>
    </div>
  )
}

export default partners
