// src/components/NavigationBar.js
import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css"; // You can style your navigation bar in a separate CSS file

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/class">Class</Link>
        </li>
        <li className="nav-item">
          <Link to="/assignments">Assignments</Link>
        </li>
        <li className="nav-item">
          <Link to="/notes">Notes</Link>
        </li>
        <li className="nav-item">
          <Link to="/ai">AI</Link>
        </li>
        <li className="nav-item">
          <Link to="/profile">User_Name</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
