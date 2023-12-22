// src/components/NavigationBar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = () => {
  const location = useLocation();
  const restrictedRoutes = ["/login", "/signup", "/"];

  if (restrictedRoutes.includes(location.pathname)) {
    return null; // Do not render NavigationBar for restricted routes
  }

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
          <Link to="/alerts">Alerts</Link>
        </li>
        <li className="nav-item">
          <Link to="/profile">User_Name</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
