// src/components/Assignments.js
import React from "react";
import "./Assignments.css"; // Make sure to adjust the path based on your folder structure

const assignmentsData = [
  {
    id: 1,
    title: "Assignment 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    dueDate: "2023-01-30",
    status: "Pending",
  },
  {
    id: 2,
    title: "Assignment 2",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    dueDate: "2023-02-15",
    status: "Completed",
  },
  // Add more assignments as needed
];

const Assignments = () => {
  return (
    <div className="assignments-container">
      <h2>Assignments</h2>
      <div className="assignments-list">
        {assignmentsData.map((assignment) => (
          <div key={assignment.id} className="assignment-card">
            <h3>{assignment.title}</h3>
            <p>{assignment.description}</p>
            <div className="assignment-details">
              <span>Due Date: {assignment.dueDate}</span>
              <span>Status: {assignment.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
