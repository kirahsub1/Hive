import React from "react";
import logo from "../asset/hive-logo.png";
import "../css/navbar.css"
const navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
        <a href="https://www.dwolla.com/">Home</a>
        <a href="https://www.dwolla.com/">Tracking</a>
        <a href="https://www.dwolla.com/">About Us</a>
        <a href="https://www.dwolla.com/">Services</a>
      
      <div className="navbar-buttons">
        <button className="btn-signin">Sign In</button>
        <button className="btn-register">Register</button>
      </div>
    </nav>
  );
};

export default navbar;
