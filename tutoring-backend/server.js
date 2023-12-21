const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));

const port = process.env.PORT || 5000;

const studentsConnection = mongoose.createConnection(
  "mongodb://127.0.0.1:27017/Student", // Update the database name
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const teachersConnection = mongoose.createConnection(
  "mongodb://127.0.0.1:27017/Teacher", // Update the database name
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

// Define user schema and models
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  userType: String,
});

const Student = studentsConnection.model("Student", userSchema);
const Teacher = teachersConnection.model("Teacher", userSchema);

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

// Signup route
app.post("/signup", async (req, res) => {
  const { username, email, password, userType } = req.body;

  try {
    const User = userType === "student" ? Student : Teacher;
    const newUser = new User({ username, email, password, userType });
    await newUser.save();

    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
