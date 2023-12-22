import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import "./student_dashboard.css";

function StudentDashboard() {
  const [gradingData, setGradingData] = useState([]);
  const [assignmentSubmissionPercentage, setAssignmentSubmissionPercentage] =
    useState(60); // Dummy data

  // New state variables for feedback
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleMenuItemClick = (menuItem) => {
    //console.log(Clicked on ${menuItem});
    // You can add logic here to navigate to the respective section/page or perform other actions
  };

  useEffect(() => {
    // Dummy data for attendance percentage (replace with actual data)
    const attendancePercentage = 80;

    // Dummy data for grading (replace with actual data)
    const gradingData = [90, 85, 75, 95, 80];

    setGradingData(gradingData);

    // Render the attendance graph
    const attendanceCtx = document.getElementById("attendanceChart");
    new Chart(attendanceCtx, {
      type: "doughnut",
      data: {
        labels: ["Present", "Absent"],
        datasets: [
          {
            data: [attendancePercentage, 100 - attendancePercentage],
            backgroundColor: ["#4CAF50", "#FF5733"],
          },
        ],
      },
    });

    // Render the grading bar graph
    const gradingCtx = document.getElementById("gradingChart");
    new Chart(gradingCtx, {
      type: "bar",
      data: {
        labels: [
          "Assignment 1",
          "Assignment 2",
          "Assignment 3",
          "Assignment 4",
          "Assignment 5",
        ],
        datasets: [
          {
            label: "Grades",
            data: gradingData,
            backgroundColor: [
              "#3498db",
              "#2ecc71",
              "#e74c3c",
              "#f39c12",
              "#9b59b6",
            ],
          },
        ],
      },
    });

    // Render the assignment submission percentage pie chart
    const assignmentSubmissionCtx = document.getElementById(
      "assignmentSubmissionChart"
    );
    new Chart(assignmentSubmissionCtx, {
      type: "pie",
      data: {
        labels: ["Submitted", "Not Submitted"],
        datasets: [
          {
            data: [
              assignmentSubmissionPercentage,
              100 - assignmentSubmissionPercentage,
            ],
            backgroundColor: ["#3498db", "#e74c3c"],
          },
        ],
      },
    });
  }, [assignmentSubmissionPercentage]);

  const handleFeedbackSubmit = () => {
    // Perform actions to send feedback (replace with actual logic)

    // For demonstration purposes, we'll just log the feedback message
    console.log("Feedback submitted:", feedbackMessage);

    // Update the state to indicate that feedback has been sent
    setFeedbackSent(true);

    // Optionally, you can reset the feedback message after submission
    setFeedbackMessage("");
  };

  return (
    <div className="student-dashboard">
      <header>
        <h1>Student Dashboard</h1>
      </header>

      <section className="user-info">
        <h2>John Doe</h2>
      </section>

      <section className="flex-boxes">
        <div className="flex-box attendance-record">
          <h3>Attendance Record</h3>
          <p>Present: 20</p>
          <p>Absent: 5</p>
          <canvas id="attendanceChart" width="100" height="100"></canvas>
        </div>
        <div className="flex-box grading-chart">
          <h3>Grading</h3>
          <canvas id="gradingChart" width="100" height="100"></canvas>
        </div>
        <div className="flex-box assignment-submission-chart">
          <h3>Assignment Submission</h3>
          <canvas
            id="assignmentSubmissionChart"
            width="100"
            height="100"
          ></canvas>
        </div>
        <div className="flex-box feedback-section">
          <h3>Send Feedback</h3>
          <textarea
            value={feedbackMessage}
            onChange={(e) => setFeedbackMessage(e.target.value)}
            placeholder="Type your feedback here..."
          />
          <button onClick={handleFeedbackSubmit}>Send</button>
          {feedbackSent && <p>Feedback sent successfully!</p>}
        </div>
      </section>
    </div>
  );
}

export default StudentDashboard;
