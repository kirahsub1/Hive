import React from 'react';
import formlogo from "../asset/hive-logistics-logo.png";
import "../css/register.css"
const register = () => {
  return (
    <div className="register-form">
      <span className='form-logo'>
        <img src= {formlogo} alt="logo" />
      </span>
      <form className="form-container1">
        <div className="form-text1">
          <h1> Let Get Started </h1>
          <p>Enter your Credential to Register your Account </p>
        </div>
        <label>
          Full Name:
          <input
            type="text"
            name="full name"
            placeholder="First Name Last Name"
            autoComplete="off"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            autoComplete="off"
          />
        </label>
        <lable>
          Password:
          <input
            type="password"
            name="password"
            placeholder="*******"
            autoComplete="off"
          />
        </lable>
        <label>
          Phone Number:
          <input
            type="phone number"
            name="phone number"
            placeholder="+234 *********"
            autoComplete="off"
          />
        </label>
        <label>
          Home Address:
          <input
            type="home address"
            name="home address"
            placeholder="Enter address"
            autoComplete="off"
          />
        </label>
        <label>
          Work Address:
          <input
            type="work address"
            name="work address"
            placeholder="Enter address"
            autoComplete="off"
          />
        </label>
        <span>I agree to Terms & Privacy</span>

        <button type="button">Register</button>
      </form>
    </div>
  );
}

export default register;
