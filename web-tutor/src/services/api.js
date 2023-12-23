import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000", // Update with your backend server URL
});

// Example frontend code making a signup request
const signupUser = async (userData) => {
  try {
    // Hash password on the frontend before sending to the server
    const hashedPassword = hashPassword(userData.password);

    const response = await api.post("/signup", {
      ...userData,
      password: hashedPassword,
    });

    console.log(response.data); // handle the successful response
  } catch (error) {
    console.error("Error signing up:", error.message);
  }
};

// Example frontend code making a login request
const loginUser = async (loginData) => {
  try {
    const response = await api.post("/login", loginData);
    console.log(response.data); // handle the successful response, e.g., store token in local storage
    return response.data; // return response data if needed
  } catch (error) {
    console.error("Error logging in:", error.message);
    throw error; // throw the error for the component to handle
  }
};

// Hash password function (example, you may need to use a library)
const hashPassword = (password) => {
  // Your password hashing logic here
  // Example using a hypothetical hashPasswordFunction
  // return hashPasswordFunction(password);

  // For demonstration purposes, replace with actual hashing logic
  return password;
};

const getNotes = async () => {
  try {
    const response = await api.get("/notes"); // Assuming you have an endpoint like "/notes" on your server

    console.log(response.data); // Handle the successful response, e.g., update state in your component
    return response.data; // Return response data if needed
  } catch (error) {
    console.error("Error getting notes:", error.message);
    throw error; // Throw the error for the component to handle
  }
};

export default {
  signupUser,
  loginUser,
  getNotes,
};
