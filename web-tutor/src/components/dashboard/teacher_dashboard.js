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
      console.error(error.message);
      alert("An error occurred while creating the class. Please try again.");
    }
  };

  const handleCancelClass = (cancelledClass) => {
    // Filter out the cancelled class from the state
    const updatedClasses = createdClasses.filter(
      (classItem) => classItem !== cancelledClass
    );

    // Update the state to trigger a re-render without the cancelled class
    setCreatedClasses(updatedClasses);
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

      {/* Display upcoming classes as cards */}
      <section className="upcoming-classes">
        <h3>Upcoming Classes</h3>
        {createdClasses.map((createdClass, index) => (
          <div key={index} className="class-card">
            <p>Student: {createdClass.student}</p>
            <p>Subject: {createdClass.subject}</p>
            <p>
              Meet Link:{" "}
              <a href={createdClass.meetLink}>{createdClass.meetLink}</a>
            </p>
            <p>Start Time: {createdClass.startTime}</p>
            <p>End Time: {createdClass.endTime}</p>
            <button onClick={() => handleCancelClass(createdClass)}>
              Cancel
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default TeacherDashboard;
