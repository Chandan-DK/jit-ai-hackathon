// tutoring-backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

const studentsConnection = mongoose.createConnection(
  process.env.MONGODB_URI_STUDENTS,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const teachersConnection = mongoose.createConnection(
  process.env.MONGODB_URI_TEACHERS,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

studentsConnection.on("connected", () => {
  console.log("Connected to Students Database");
});

teachersConnection.on("connected", () => {
  console.log("Connected to Teachers Database");
});

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

// OpenAI API route for chat interactions
app.post("/api/openai/chat", async (req, res) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant.",
          },
          {
            role: "user",
            content: req.body.input,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json({ output: response.data.choices[0].message.content });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
