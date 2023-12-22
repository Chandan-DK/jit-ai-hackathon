import React, { useState } from 'react';
import './student_dashboard';

function TeacherDashboard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [meetLink, setMeetLink] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuItemClick = (menuItem) => {
    console.log(`Clicked on ${menuItem}`);
    // You can add logic here to navigate to the respective section/page or perform other actions
  };

  const handleCreateClass = () => {
    // Perform actions for creating a class using meetLink, startTime, and endTime
    console.log('Creating a class with Meet Link:', meetLink);
    console.log('Start Time:', startTime);
    console.log('End Time:', endTime);
  };

  return (
    <div className="student-dashboard">
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
        <div className="flex-box upcoming-classes">
          <h3>Upcoming Classes</h3>
          {/* Display upcoming class data here */}
        </div>
        <div className="flex-box attendance-record">
          <h3>studenlist</h3>
          <p>john</p>
          <p>richards</p>
          <p>mike</p>
        </div>
      </section>

      {/* "Create a Class" Form */}
      <section className="create-class-form">
        <h3>Create a Class</h3>
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
    </div>
  );
}

export default TeacherDashboard;
