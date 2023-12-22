import React, { useState } from 'react';
import './student_dashboard';

function TeacherDashboard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [meetLink, setMeetLink] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  // Using mock students here right now.
  const [selectedStudent, setSelectedStudent] = useState(null);
  const students = ['John', 'Richards', 'Mike']; // Replace with your actual list of student names

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

  const handleCreateClass = () => {
    // Check if all required fields are filled
    if (!selectedStudent || !meetLink || !startTime || !endTime) {
      alert('Please fill in all fields before creating a class.');
      return;
    }

    // Create a new class object
    const newClass = {
      student: selectedStudent,
      subject: 'YourSubject', // Replace with the actual subject
      meetLink: meetLink,
      startTime,
      endTime,
    };

    // Add the new class to the state
    setCreatedClasses((prevClasses) => [...prevClasses, newClass]);

    // Clear the input fields after creating a class
    setMeetLink('');
    setStartTime('');
    setEndTime('');
    setSelectedStudent('');
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
        <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
          <li onClick={() => handleMenuItemClick('Assignment')}>Assignment</li>
          <li onClick={() => handleMenuItemClick('Settings')}>Settings</li>
          <li onClick={() => handleMenuItemClick('Schedule')}>Schedule</li>
          <li onClick={() => handleMenuItemClick('Account')}>Account</li>
          <li onClick={() => handleMenuItemClick('students list')}>Account</li>
        </ul>
      </header>

      <section className="user-info">
        <h2>Teacher name</h2>
      </section>

      <section className="flex-boxes">
        <div className="flex-box attendance-record">
          <h3>Student List</h3>
          <p>john</p>
          <p>richards</p>
          <p>mike</p>
        </div>
      </section>

      {/* "Create a Class" Form */}
      <section className="create-class-form">
        <h3>Create a Class</h3>
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
          <input type="text" value={meetLink} onChange={(e) => setMeetLink(e.target.value)} />
        </label>
        <label>
          Start Time:
          <input type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
        </label>
        <label>
          End Time:
          <input type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
        </label>
        <button onClick={handleCreateClass}>Create Class</button>
      </section>

      {/* Display upcoming classes as cards */}
      <section className="upcoming-classes">
        <h3>Upcoming Classes</h3>
        {createdClasses.map((createdClass, index) => (
          <div key={index} className="class-card">
            <p>Student: {createdClass.student}</p>
            <p>Subject: {createdClass.subject}</p>
            <p>Meet Link: <a href={createdClass.meetLink}>{createdClass.meetLink}</a>
            </p>
            <p>Start Time: {createdClass.startTime}</p>
            <p>End Time: {createdClass.endTime}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default TeacherDashboard;
