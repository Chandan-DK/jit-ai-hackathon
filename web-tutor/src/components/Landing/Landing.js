// src/components/Home/Home.js
import React from "react";
import "./Landing.css";
import Header from "../Header/Header";
import LandingBody from "./LandingBody/LandingBody";
import LandingContact from "./LandingContact/LandingContact";

const Landing = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <Header className="Header" />
      </div>
      <div className="home-content">
        <div className="landing-top-section">
          <h1>Welcome to Tutoring App</h1>
          <p>
            This is the home page of the tutoring application. You can add more
            content, features, and styling as needed for your application.
          </p>
        </div>
        <div className="landing-body">
          <LandingBody className="LandingBody" />
        </div>
        <div className="landing-contact">
          <LandingContact className="LandingContact" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
