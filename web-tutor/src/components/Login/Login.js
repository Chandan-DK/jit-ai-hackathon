import React, { useState } from "react";
import { FaUserGraduate, FaUserTie, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import loginApi from "../../services/api";
import "./Login.css";

const Login = () => {
  const [isTeacherMode, setIsTeacherMode] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginApi.loginUser({
        username,
        password,
        isTeacher: isTeacherMode,
      });

      // Assuming the response includes information about the user type
      const userType = response.userType;

      // Redirect based on user type
      if (userType === "teacher") {
        navigate("/teacher-dashboard");
      } else if (userType === "student") {
        navigate("/student-dashboard");
      } else {
        navigate("/home");
      }
    } catch (error) {
      setError("Wrong username or password");
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleLogin}>
        <h1>{isTeacherMode ? "Teacher Login" : "Student Login"}</h1>
        {error && <p className="error-message">{error}</p>}
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {isTeacherMode ? <FaUserTie /> : <FaUserGraduate />}
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            Don't have an account?{" "}
            <a href="http://localhost:3000/signup">Sign Up</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
