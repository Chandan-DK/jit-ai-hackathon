// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClassScheduler from "./components/ClassScheduler/ClassScheduler";
import Login from "./components/Login/Login";
import Assignments from "./components/Assignments/Assignments";
import Notes from "./components/Notes/Notes";
import AI from "./components/AI/AI";
import UserProfile from "./components/UserProfile/UserProfile";
import Signup from "./components/Login/Signup";
import Landing from "./components/Landing/Landing";
import StudentDashboard from "./components/dashboard/student_dashboard";
import TeacherDashboard from "./components/dashboard/teacher_dashboard";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/class-scheduler" element={<ClassScheduler />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/studentdashboard" element={<StudentDashboard/>} />
        <Route path="/teacherdashboard" element={<TeacherDashboard/>} />
       
      
      </Routes>
    </Router>
  );
}

export default App;
