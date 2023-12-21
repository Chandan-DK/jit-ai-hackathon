// src/components/UserProfile.js
import React, { useState } from "react";
import "./UserProfile.css"; // Adjust the path based on your folder structure
import { FaUserEdit } from "react-icons/fa"; // Import the edit icon

const UserProfile = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const user = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    className: "Class 10A",
    // You can include additional user details as needed
  };

  const handleEditClick = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <div className="user-profile-container">
      <div className="profile-header">
        <h2>User Profile</h2>
        <button className="edit-button" onClick={handleEditClick}>
          <FaUserEdit /> Edit Profile
        </button>
      </div>
      <div className="profile-details">
        <div className="profile-picture">
          <img src="https://placekitten.com/200/200" alt="Profile" />
          {isEditMode && (
            <button className="edit-picture-button">Edit Picture</button>
          )}
        </div>
        <div className="user-info">
          <div className="info-item">
            <label>Name:</label>
            {isEditMode ? (
              <input type="text" value={user.name} />
            ) : (
              <span>{user.name}</span>
            )}
          </div>
          <div className="info-item">
            <label>Email:</label>
            {isEditMode ? (
              <input type="text" value={user.email} />
            ) : (
              <span>{user.email}</span>
            )}
          </div>
          <div className="info-item">
            <label>Class:</label>
            {isEditMode ? (
              <input type="text" value={user.className} />
            ) : (
              <span>{user.className}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
