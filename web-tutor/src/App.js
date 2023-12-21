// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Change 'Switch' to 'Routes'
import Home from "./components/Home/Home"; // Update the path
import ClassScheduler from "./components/ClassScheduler/ClassScheduler"; // Update the path
import Login from "./components/Login/Login"; // Update the path

function App() {
  return (
    <Router>
      <Routes>
        {" "}
        {/* Change 'Switch' to 'Routes' */}
        <Route path="/" element={<Home />} />
        <Route path="/class-scheduler" element={<ClassScheduler />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
