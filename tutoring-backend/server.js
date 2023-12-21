// tutoring-backend/server.js
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB Atlas databases
mongoose.connect(process.env.MONGODB_URI_STUDENTS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connect(process.env.MONGODB_URI_TEACHERS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
