// services/api.js

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000", // Update with your backend server URL
});

// Example frontend code making a signup request
const signupUser = async (userData) => {
  try {
    const response = await api.post("/signup", userData);
    console.log(response.data); // handle the successful response
  } catch (error) {
    console.error("Error signing up:", error.message);
  }
};

export default {
  signupUser,
};
