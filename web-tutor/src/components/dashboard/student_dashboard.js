import React, { useState } from 'react';
import './student_dashboard.css';

function StudentDashboard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuItemClick = (menuItem) => {
    console.log(`Clicked on ${menuItem}`);
    // You can add logic here to navigate to the respective section/page or perform other actions
  };

  return (
    <div className="student-dashboard">
      <header>
        <h1>Student Dashboard</h1>
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
        </ul>
      </header>

      <section className="user-info">
        <h2>John Doe</h2>
      </section>

      <section className="flex-boxes">
        <div className="flex-box upcoming-classes">
          <h3>Upcoming Classes</h3>
          {/* Display upcoming class data here */}
        </div>
        <div className="flex-box attendance-record">
          <h3>Attendance Record</h3>
          <p>Present: 20</p>
          <p>Absent: 5</p>
        </div>
      </section>
    </div>
  );
}

export default StudentDashboard;
