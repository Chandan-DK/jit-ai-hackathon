// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import ClassScheduler from "./components/ClassScheduler/ClassScheduler";
import Login from "./components/Login/Login";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Assignments from "./components/Assignments/Assignments";
import Notes from "./components/Notes/Notes";
import AI from "./components/AI/AI";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/class-scheduler" element={<ClassScheduler />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
