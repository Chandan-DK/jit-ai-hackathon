// src/components/Header/Header.js
import React from "react";
import "./Header.css";

// This Header is basically the navbar used by the Landing Page 
// This is DIFFERENT from NavigationBar
const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">Web Tutor</div>
      <div className="nav-buttons">
        <div className="button-container">
          <button className="signup-button">Sign Up</button>
        </div>
        <div className="button-container">
          <button className="login-button">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
