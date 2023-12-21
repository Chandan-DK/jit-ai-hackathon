// src/services/api.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000", // Adjust the base URL based on your Flask backend's address
  timeout: 5000, // Set the timeout for requests (milliseconds)
  headers: {
    "Content-Type": "application/json",
    // Add any additional headers as needed
  },
});

// Add interceptors or additional configurations if needed

export default instance;
