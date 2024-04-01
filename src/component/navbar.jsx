import React from "react";
import logo from "../images/Logo.png";
import "../css/navbar.css";
const navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu">
          <a href="#">Home</a>
          <a href="#">Tracking</a>
          <a href="#">About Us</a>
          <a href="#">Services</a>
      
      </div>
      <div className="navbar-buttons">
        <button className="btn-signin">Sign In</button>
        <button className="btn-register">Register</button>
      </div>
    </nav>
  );
};

export default navbar;
