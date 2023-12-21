// src/components/Login/Login.js
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api"; // Adjust the path based on your folder structure
import "./Login.css";
const Login = () => {
  // ... (omitting previous code for brevity)

  const handleLogin = async () => {
    try {
      const response = await api.post("/login", {
        // username,
        //password,
      });

      // Handle successful login
      console.log(response.data);

      // Redirect to the home page after successful login
      //  history.push("/");
    } catch (error) {
      // Handle login failure
      console.error("Login failed", error);
    }
  };

  // ... (omitting the rest of the code for brevity)
};

export default Login;
