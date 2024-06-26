import React from "react";
import logo from "../asset/hive-logistics-logo.png";
import "../css/navbar.css";
const navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>

      <a href="/home">Home</a>
      <a href="/tracking">Tracking</a>
      <a href="/about">About Us</a>
      <a href="/services">Services</a>

      
      <div className="navbar-buttons">
        <a href="/login">
          <button className="btn-signin">Sign In</button>
        </a>
        <a href="/register">
          <button className="btn-register">Register</button>
        </a>
      </div>
    </nav>
  );
};

export default navbar;
