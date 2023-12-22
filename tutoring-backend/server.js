const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const cors = require("cors");
const openaiRoutes = require("./routes/openaiRoutes");
const nodemailer = require("nodemailer"); // Import nodemailer

require("dotenv").config();

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));

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

app.use(express.json());

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  userType: String,
});

const Student = studentsConnection.model("Student", userSchema);
const Teacher = teachersConnection.model("Teacher", userSchema);

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

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
    const newUser = new User({
      username,
      email,
      password,
      userType,
    });

    await newUser.save();

    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Login route
app.post("/login", async (req, res) => {
  const { username, password, userType } = req.body;

  try {
    const User = userType === "student" ? Student : Teacher;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Compare passwords without hashing on the server
    if (password !== user.password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res
      .status(200)
      .json({ message: "Login successful!", userType: user.userType });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/create-class", async (req, res) => {
  const { student, subject, meetLink, startTime, endTime } = req.body;

  try {
    // Save the class details to your database or perform necessary actions
    // For example, you can create a new collection/model for classes and save the details there

    // For now, let's assume you have a Class model
    // Replace 'YourClassModel' with the actual model name you have or create a new model
    const YourClassModel = teachersConnection.model("YourClass", {
      student,
      subject,
      meetLink,
      startTime,
      endTime,
    });

    const newClass = new YourClassModel({
      student,
      subject,
      meetLink,
      startTime,
      endTime,
    });

    await newClass.save();

    res.status(201).json({ message: "Class created successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Define your nodemailer transporter outside the route handler
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SENDER_MAIL,
    pass: process.env.SENDER_PWD,
  },
});

// Endpoint to send emails
app.post("/send-email", async (req, res) => {
  console.log("Send email called");
  const { to, subject, body } = req.body;

  try {
    // Use nodemailer transporter to send emails
    const mailOptions = {
      from: process.env.SENDER_MAIL,
      to: "1dt21cs031@dsatm.edu.in",
      subject,
      text: body,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint to send cancel emails
app.post("/send-cancel-email", async (req, res) => {
  console.log("Cancel email endpoint called");
  const { to, subject, body } = req.body;

  try {
    // Use nodemailer transporter to send emails
    const mailOptions = {
      from: process.env.SENDER_MAIL,
      to: "1dt21cs031@dsatm.edu.in",
      subject,
      text: "Class Was Cancelled" + body,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Cancel email sent successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
