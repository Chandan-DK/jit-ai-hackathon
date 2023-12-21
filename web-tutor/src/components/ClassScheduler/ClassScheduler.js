// src/components/ClassScheduler/ClassScheduler.js
import React, { useState } from "react";
import api from "../../services/api"; // Adjust the path based on your folder structure
import "./ClassScheduler.css";
const ClassScheduler = () => {
  // ... (omitting previous code for brevity)

  const handleScheduleClasses = async () => {
    try {
      // Make a POST request to the backend endpoint
      const response = await api.post("/schedule-classes", {
        //timetableFile,
        //preferredTimeSlots,
      });

      // Handle the response as needed
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.error("Class scheduling failed", error);
    }
  };

  // ... (omitting the rest of the code for brevity)
};

export default ClassScheduler;
