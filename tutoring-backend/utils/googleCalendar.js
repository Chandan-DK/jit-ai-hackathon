// tutoring-backend/googleCalendar.js
const { google } = require("googleapis");
const { authenticate } = require("google-auth-library");

// Load client secrets from a file downloaded from the Google Cloud Console.
const credentials = require("./path/to/your/credentials.json");

const SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];
const calendarId = "primary"; // Use 'primary' for the primary calendar

async function listEvents() {
  const auth = await authenticate({
    credentials,
    scopes: SCOPES,
  });

  const calendar = google.calendar({ version: "v3", auth });

  const events = await calendar.events.list({
    calendarId,
    timeMin: new Date().toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: "startTime",
  });

  const eventList = events.data.items.map((event) => ({
    summary: event.summary,
    start: event.start.dateTime || event.start.date,
    end: event.end.dateTime || event.end.date,
    hangoutLink: event.hangoutLink,
  }));

  return eventList;
}

module.exports = { listEvents };
