import React, { useState } from "react";
// import './student_dashboard';  // Remove this line if not needed

function TeacherDashboard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [meetLink, setMeetLink] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  // Using mock students here right now.
  const [selectedStudent, setSelectedStudent] = useState("");
  const students = ["John", "Richards", "Mike"]; // Replace with your actual list of student names

  // Add a state to track attendance status
  const [attendanceStatus, setAttendanceStatus] = useState(
    Array(students.length).fill(true)
  );

  const handleToggleAttendance = (index) => {
    // Toggle the attendance status
    const updatedAttendanceStatus = [...attendanceStatus];
    updatedAttendanceStatus[index] = !updatedAttendanceStatus[index];

    // If "Yes" button is clicked, disable the "No" button and vice versa
    if (updatedAttendanceStatus[index]) {
      updatedAttendanceStatus[index === 0 ? 1 : 0] = false;
    }

    setAttendanceStatus(updatedAttendanceStatus);
  };

  const handleSelectChange = (e) => {
    setSelectedStudent(e.target.value);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuItemClick = (menuItem) => {
    console.log(`Clicked on ${menuItem}`);
    // You can add logic here to navigate to the respective section/page or perform other actions
  };

  const [createdClasses, setCreatedClasses] = useState([]);

  const handleCreateClass = async (e) => {
    console.log("yooo im here");
    e.preventDefault();

    // Replace these URLs with your actual endpoints
    const createClassURL = "your-create-class-url";
    const sendEmailURL = "http://localhost:5000/send-email";

    try {
      // Check if all required fields are filled
      if (!selectedStudent || !meetLink || !startTime || !endTime) {
        alert("Please fill in all fields before creating a class.");
        return;
      }

      // Create a new class object
      const newClass = {
        student: selectedStudent,
        subject: "YourSubject", // Replace with the actual subject
        meetLink: meetLink,
        startTime,
        endTime,
      };

      // Add the new class to the state
      setCreatedClasses((prevClasses) => [...prevClasses, newClass]);

      // Clear the input fields after creating a class
      setMeetLink("");
      setStartTime("");
      setEndTime("");
      setSelectedStudent("");

      // Make an API call to create a class
      // const createClassResponse = await fetch(createClassURL, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(newClass),
      // });

      // if (!createClassResponse.ok) {
      //   throw new Error("Failed to create class. Please try again.");
      // }

      // Make an API call to send an email
      const sendEmailResponse = await fetch(sendEmailURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "john@example.com", // Replace with the actual student's email
          subject: "Class Details",
          body: `You have a new class. Details:\n\nStudent: ${newClass.student}\nSubject: ${newClass.subject}\nMeet Link: ${newClass.meetLink}\nStart Time: ${newClass.startTime}\nEnd Time: ${newClass.endTime}`,
        }),
      });

      if (!sendEmailResponse.ok) {
        throw new Error("Failed to send email notification.");
      }

      console.log("Class created successfully, and email sent.");
    } catch (error) {
      //console.error(error.message);
      // alert("An error occurred while creating the class. Please try again.");
    }
  };

  const handleCancelClass = async (cancelledClass) => {
    // const sendCancelEmailURL = "http://localhost:5000/send-cancel-email";

    // // Make an API call to send a cancel email
    // const sendEmailResponse = await fetch(sendCancelEmailURL, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     to: "john@example.com",
    //     subject: "Class Details",
    //     body: `Class was cancelled.\nDetails:\n\nStudent: ${
    //       cancelledClass.student || "N/A"
    //     }\nSubject: ${cancelledClass.subject || "N/A"}\nMeet Link: ${
    //       cancelledClass.meetLink || "N/A"
    //     }\nStart Time: ${cancelledClass.startTime || "N/A"}\nEnd Time: ${
    //       cancelledClass.endTime || "N/A"
    //     }`,
    //   }),
    // });

    // if (!sendEmailResponse.ok) {
    //   throw new Error("Failed to send cancel email notification.");
    // }
    // Filter out the cancelled class from the state
    const updatedClasses = createdClasses.filter(
      (classItem) => classItem !== cancelledClass
    );

    // Update the state to trigger a re-render without the cancelled class
    setCreatedClasses(updatedClasses);
  };

  const handleMarkAttendance = async () => {
    // Replace with your actual endpoint for marking attendance
    const markAttendanceURL = "http://localhost:5000/mark-attendance";

    const students = [
      {
        _id: "65857cfd1183f5bdbe5af063",
        username: "av",
        email: "av@gmail.com",
        password: "123456",
        userType: "student",
        __v: 0,
      },
      {
        _id: "658586ab600184fca7c545eb",
        username: "stu1",
        email: "stu1@gmail.com",
        password: "123456",
        userType: "student",
        __v: 0,
      },
      // Add more students as needed
    ];
    try {
      // Check if all required fields are filled
      if (!selectedStudent || !meetLink || !startTime || !endTime) {
        alert("Please fill in all fields before marking attendance.");
        return;
      }

      // Find the selected student in the sample database
      const student = students.find((s) => s.username === selectedStudent);

      // Assume 'createdClasses' has a corresponding class object
      const createdClass = createdClasses[createdClasses.length - 1];

      // Make an API call to mark attendance
      const markAttendanceResponse = await fetch(markAttendanceURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentId: student._id,
          classId: createdClass._id, // You should have an appropriate way to track class IDs
          status: attendanceStatus[createdClasses.length - 1]
            ? "Present"
            : "Absent",
        }),
      });

      if (!markAttendanceResponse.ok) {
        throw new Error("Failed to mark attendance. Please try again.");
      }

      console.log("Attendance marked successfully.");
    } catch (error) {
      console.error(error.message);
      alert("An error occurred while marking attendance. Please try again.");
    }
  };

  return (
    <div className="teacher-dashboard">
      <header>
        <h1>Teacher Dashboard</h1>
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          <span className="dot">•</span>
          <span className="dot">•</span>
          <span className="dot">•</span>
        </button>
        <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
          <li onClick={() => handleMenuItemClick("Assignment")}>Assignment</li>
          <li onClick={() => handleMenuItemClick("Settings")}>Settings</li>
          <li onClick={() => handleMenuItemClick("Schedule")}>Schedule</li>
          <li onClick={() => handleMenuItemClick("Account")}>Account</li>
          <li onClick={() => handleMenuItemClick("students list")}>
            Students List
          </li>
        </ul>
      </header>

      <section className="user-info">
        <h2>Teacher name</h2>
      </section>

      <section className="flex-boxes">
        <div className="flex-box attendance-record">
          <h3>Student List</h3>
          <li>John</li>
          <li>Richards</li>
          <li>Mike</li>
        </div>
      </section>

      {/* "Create a Class" Form */}
      <section className="create-class-form">
        <h3>Create a Class</h3>
        <form onSubmit={handleCreateClass}>
          <label>
            Select Student:
            <select value={selectedStudent} onChange={handleSelectChange}>
              <option value="">Select a student</option>
              {students.map((student, index) => (
                <option key={index} value={student}>
                  {student}
                </option>
              ))}
            </select>
          </label>
          <label>
            Google Meet Link:
            <input
              type="text"
              value={meetLink}
              onChange={(e) => setMeetLink(e.target.value)}
            />
          </label>
          <label>
            Start Time:
            <input
              type="datetime-local"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </label>
          <label>
            End Time:
            <input
              type="datetime-local"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </label>
          <button type="submit">Create Class</button>
        </form>
      </section>

      <div className="flex-box feedback-section">
          <h3>Send Feedback</h3>
          <button onClick={() => (window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdl8slH60xb7lYaQ4xYQx_TXA0DJH_HNZgGAMwftLbxmjAjYw/viewform?usp=sf_link')}>
            Fill Feedback Form
          </button>
        </div>

      <section className="upcoming-classes">
        <h3>Classes</h3>
        {createdClasses.map((createdClass, index) => (
          <div
            key={index}
            className={`class-card ${
              attendanceStatus[index] ? "attended" : ""
            }`}
          >
            <p>Student: {createdClass.student}</p>
            <p>Subject: {createdClass.subject}</p>
            <p>
              Meet Link:{" "}
              <a href={createdClass.meetLink}>{createdClass.meetLink}</a>
            </p>
            <p>Start Time: {createdClass.startTime}</p>
            <p>End Time: {createdClass.endTime}</p>
            <div className="attendance-section">
              <span>Attendance:</span>
              <button
                onClick={() => handleToggleAttendance(index)}
                className={`attendance-status-button ${
                  attendanceStatus[index] ? "attended" : ""
                }`}
                style={{
                  backgroundColor: attendanceStatus[index] ? "green" : "",
                }}
              >
                Present
              </button>
              <button
                onClick={() => handleToggleAttendance(index)}
                className={`attendance-status-button ${
                  attendanceStatus[index] === false ? "attended" : ""
                }`}
                style={{
                  backgroundColor:
                    attendanceStatus[index] === false ? "red" : "",
                }}
              >
                Absent
              </button>
            </div>

            <button
              onClick={() => handleCancelClass(createdClass)}
              className={`cancel-button ${
                attendanceStatus[index] ? "attended" : ""
              }`}
            >
              Cancel
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default TeacherDashboard;
