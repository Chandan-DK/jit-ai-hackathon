import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { GoogleLogin } from "react-google-login";
import "./admin_dashboard.css"; // You can create a separate CSS file for styling

function AdminDashboard() {
  const [teachersData, setTeachersData] = useState([]);

  useEffect(() => {
    // Dummy data for teachers and student grades (replace with actual data)
    const teachersData = [
      {
        name: "Teacher 1",
        students: 25,
        averageGrade: 85,
        calendarId: "teacher1@example.com",
      },
      {
        name: "Teacher 2",
        students: 30,
        averageGrade: 78,
        calendarId: "teacher2@example.com",
      },
      {
        name: "Teacher 3",
        students: 20,
        averageGrade: 92,
        calendarId: "teacher3@example.com",
      },
      // Add more teachers as needed
    ];

    setTeachersData(teachersData);

    // Render the students per teacher bar graph
    const studentsPerTeacherCtx = document.getElementById(
      "studentsPerTeacherChart"
    );
    new Chart(studentsPerTeacherCtx, {
      type: "bar",
      data: {
        labels: teachersData.map((teacher) => teacher.name),
        datasets: [
          {
            label: "Number of Students",
            data: teachersData.map((teacher) => teacher.students),
            backgroundColor: ["#3498db", "#2ecc71", "#e74c3c"], // Add more colors as needed
          },
        ],
      },
    });

    // Render the average grade per teacher bar graph
    const averageGradePerTeacherCtx = document.getElementById(
      "averageGradePerTeacherChart"
    );
    new Chart(averageGradePerTeacherCtx, {
      type: "bar",
      data: {
        labels: teachersData.map((teacher) => teacher.name),
        datasets: [
          {
            label: "Average Grade",
            data: teachersData.map((teacher) => teacher.averageGrade),
            backgroundColor: ["#3498db", "#2ecc71", "#e74c3c"], // Add more colors as needed
          },
        ],
      },
    });
  }, []);

  const handleCalendarButtonClick = (teacherName, calendarId) => {
    console.log(`Open calendar for ${teacherName} (${calendarId})`);
    handleCalendarLogin();
  };

  const handleCalendarLogin = () => {
    console.log("Logging in to Google Calendar...");
  };

  const responseGoogle = (response) => {
    console.log(response);
    console.log("Google Calendar login successful!");
  };

  return (
    <div className="admin-dashboard">
      <header>
        <h1>Admin Dashboard</h1>
      </header>

      <section className="flex-boxes">
        <div className="flex-box students-per-teacher-chart">
          <h3>Students per Teacher</h3>
          <canvas
            id="studentsPerTeacherChart"
            width="100"
            height="100"
          ></canvas>
        </div>
        <div className="flex-box average-grade-per-teacher-chart">
          <h3>Average Grade per Teacher</h3>
          <canvas
            id="averageGradePerTeacherChart"
            width="100"
            height="100"
          ></canvas>
        </div>
      </section>

      <section className="teacher-calendar">
        <h3>Teacher Calendars</h3>
        <ul>
          {teachersData.map((teacher) => (
            <li key={teacher.name}>
              {teacher.name}{" "}
              <button
                onClick={() =>
                  handleCalendarButtonClick(teacher.name, teacher.calendarId)
                }
              >
                Open Calendar
              </button>
            </li>
          ))}
        </ul>
        <GoogleLogin
          clientId="YOUR_GOOGLE_CLIENT_ID"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </section>
    </div>
  );
}

export default AdminDashboard;
