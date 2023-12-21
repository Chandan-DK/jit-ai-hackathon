// src/components/Login/Login.js
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api"; // Adjust the path based on your folder structure
import { FaUserGraduate, FaUserTie, FaLock } from "react-icons/fa";
import "./Login.css";
const Login = () => {
  const [isTeacherMode, setIsTeacherMode] = useState(false);

  return (
    <div className="wrapper">
      <form action="">
        <h1>{isTeacherMode ? 'Teacher Login' : 'Student Login'}</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            required
          />
          {isTeacherMode ? <FaUserTie /> : <FaUserGraduate />}
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
          />
          <FaLock />
        </div>
        <label>
          <input
            type="checkbox"
            checked={isTeacherMode}
            onChange={() => setIsTeacherMode(!isTeacherMode)}
          />
          Teacher
        </label>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>
            Don't have an account? <a href="a">Sign Up</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
