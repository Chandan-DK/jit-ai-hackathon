import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./Header.css";

const Header = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleSignUpClick = () => {
    // Redirect to the sign-up page
    navigate("/signup"); // Replace "/signup" with the actual path of your sign-up page
  };

  const handleLoginClick = () => {
    // Redirect to the login page
    navigate("/login"); // Replace "/login" with the actual path of your login page
  };

  return (
    <nav className="navbar">
      <div className="logo">Web Tutor</div>
      <div className="nav-buttons">
        <div className="button-container">
          <button className="signup-button" onClick={handleSignUpClick}>
            Sign Up <a href="http://localhost:3000/signup"/>
          </button>
        </div>
        <div className="button-container">
          <button className="login-button" onClick={handleLoginClick}>
            Login <a href="http://localhost:3000/login"/>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
