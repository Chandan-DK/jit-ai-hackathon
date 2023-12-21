// tutoring-backend/routes/classScheduleRoutes.js
const express = require("express");
const router = express.Router();
const { listEvents } = require("../googleCalendar");

router.get("/events", async (req, res) => {
  try {
    const events = await listEvents();
    res.json({ events });
  } catch (error) {
    console.error("Error fetching events from Google Calendar:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
