// src/components/ClassScheduler/ClassScheduler.js
import React, { useEffect, useState } from "react";
import api from "../../services/api"; // Adjust the path based on your folder structure

const ClassScheduler = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.get("/events"); // Assuming you've set up the backend route '/events'
        setEvents(response.data.events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="class-scheduler-container">
      <h2>Class Scheduler</h2>
      <ul>
        {events.map((event) => (
          <li key={event.summary}>
            <strong>{event.summary}</strong> - {event.start} to {event.end}{" "}
            <a
              href={event.hangoutLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Google Meet
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassScheduler;
