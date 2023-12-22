import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import ClassScheduler from "./components/ClassScheduler/ClassScheduler";
import Login from "./components/Login/Login";
import Assignments from "./components/Assignments/Assignments";
import Notes from "./components/Notes/Notes";
import AI from "./components/AI/AI";
import UserProfile from "./components/UserProfile/UserProfile";
import Signup from "./components/Login/Signup";
import Landing from "./components/Landing/Landing";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Alerts from "./components/Alerts/Alerts";
import StudentDashboard from "./components/dashboard/student_dashboard";
import TeacherDashboard from "./components/dashboard/teacher_dashboard";
import AdminDashboard from "./components/dashboard/admin_dashboard";
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
        <Route path="/signup" element={<Signup />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>

      <NavigationBar />
    </Router>
  );
}

export default App;
