import React from "react";
import icon1 from "../asset/google.png";
import icon2 from "../asset/Button-apple.png";
import icon3 from "../asset/facebook1.png";
import formlogo1 from "../asset/hive-logistics-logo.png";
import "../css/login.css";
const login = () => {
  return (
    <div className="login-form">
      <span className="form-logo">
        <img src={formlogo1} alt="" />
      </span>
      <form className="form-container">
        <span>
          <h1>Welcome Back!</h1>
          <p>Please enter your Email Address and Password to Sign in </p>
        </span>
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
        <p>forget password ?</p>
        <button type="button">Sign In</button>
        <p className="login-text">Or Connect with:</p>

        <div className="form-icon">
          <img src={icon1} alt="google" />
          <img src={icon2} alt="apple" />
          <img src={icon3} alt="facebook" />
        </div>
      </form>
    </div>
  );
};

export default login;
