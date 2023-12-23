import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Chatbot.css";
const BotResponses = [
  {
    response_type: "greeting",
    user_input: ["hello", "hi", "hey"],
    bot_response: "Hey there!",
    required_words: [],
  },
  // ... (other existing responses)
  {
    response_type: "redirect",
    user_input: ["notes"],
    bot_response: "Redirecting to Notes...",
    required_words: ["notes"],
    redirect_to: "/notes",
  },
  {
    response_type: "redirect",
    user_input: ["landing"],
    bot_response: "Redirecting to Landing...",
    required_words: ["landing"],
    redirect_to: "/",
  },
  {
    response_type: "redirect",
    user_input: ["assignments"],
    bot_response: "Redirecting to Assignments...",
    required_words: ["assignments"],
    redirect_to: "/assignments",
  },
  {
    response_type: "redirect",
    user_input: ["notes"],
    bot_response: "Redirecting to Notes...",
    required_words: ["notes"],
    redirect_to: "/notes",
  },
  {
    response_type: "redirect",
    user_input: ["ai"],
    bot_response: "Redirecting to AI...",
    required_words: ["ai"],
    redirect_to: "/ai",
  },
  {
    response_type: "redirect",
    user_input: ["profile"],
    bot_response: "Redirecting to Profile...",
    required_words: ["profile"],
    redirect_to: "/profile",
  },
  {
    response_type: "redirect",
    user_input: ["classscheduler"],
    bot_response: "Redirecting to Class Scheduler...",
    required_words: ["classscheduler"],
    redirect_to: "/classscheduler",
  },
  {
    response_type: "redirect",
    user_input: ["login"],
    bot_response: "Redirecting to Login...",
    required_words: ["login"],
    redirect_to: "/login",
  },
  {
    response_type: "redirect",
    user_input: ["signup"],
    bot_response: "Redirecting to Signup...",
    required_words: ["signup"],
    redirect_to: "/signup",
  },
  {
    response_type: "redirect",
    user_input: ["alerts"],
    bot_response: "Redirecting to Alerts...",
    required_words: ["alerts"],
    redirect_to: "/alerts",
  },
  {
    response_type: "redirect",
    user_input: ["studentdashboard"],
    bot_response: "Redirecting to Student Dashboard...",
    required_words: ["studentdashboard"],
    redirect_to: "/studentdashboard",
  },
  {
    response_type: "redirect",
    user_input: ["teacherdashboard"],
    bot_response: "Redirecting to Teacher Dashboard...",
    required_words: ["teacherdashboard"],
    redirect_to: "/teacherdashboard",
  },
  {
    response_type: "redirect",
    user_input: ["admindashboard"],
    bot_response: "Redirecting to Admin Dashboard...",
    required_words: ["admindashboard"],
    redirect_to: "/admindashboard",
  },
  {
    response_type: "redirect",
    user_input: ["chatbot"],
    bot_response: "Redirecting to Chatbot...",
    required_words: ["chatbot"],
    redirect_to: "/chatbot",
  },
  {
    response_type: "redirect",
    user_input: ["receipts"],
    bot_response: "Redirecting to Receipts...",
    required_words: ["receipts"],
    redirect_to: "/receipts",
  },
  {
    response_type: "redirect",
    user_input: ["attendance"],
    bot_response: "Fetching Attendance...",
    required_words: ["attendance"],
    redirect_to: "/studentdashboard",
  },

  // Add more redirect responses as needed
];

const getRandomResponse = () => {
  const RandomResponses = [
    "Please try writing something more descriptive.",
    "Oh! It appears you wrote something I don't understand yet",
    "Do you mind trying to rephrase that?",
    "I'm terribly sorry, I didn't quite catch that.",
    "I can't answer that yet, please try asking something else.",
  ];
  const randomIndex = Math.floor(Math.random() * RandomResponses.length);
  return RandomResponses[randomIndex];
};

const getBotResponse = (inputString, navigate) => {
  const splitMessage = inputString.toLowerCase().split(/\s+|[,;?!.-]\s*/);
  const scoreList = [];

  BotResponses.forEach((response) => {
    let responseScore = 0;
    let requiredScore = 0;
    const requiredWords = response.required_words;

    if (requiredWords.length > 0) {
      splitMessage.forEach((word) => {
        if (requiredWords.includes(word)) {
          requiredScore += 1;
        }
      });
    }

    if (requiredScore === requiredWords.length) {
      splitMessage.forEach((word) => {
        if (response.user_input.includes(word)) {
          responseScore += 1;
        }
      });
    }

    scoreList.push(responseScore);
  });

  const bestResponse = Math.max(...scoreList);
  const responseIndex = scoreList.indexOf(bestResponse);

  if (bestResponse !== 0) {
    const response = BotResponses[responseIndex];
    const redirectTo = response.redirect_to;

    if (redirectTo) {
      navigate(redirectTo);
    }

    return response.bot_response;
  }

  return getRandomResponse();
};

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [botResponse, setBotResponse] = useState("");
  const navigate = useNavigate();

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const response = getBotResponse(userInput, navigate);
    setBotResponse(response);
  };

  return (
    <div className="container">
      <div className="chatbot">
        <strong>Bot:</strong> {botResponse}
        <form className="chatbot-form" onSubmit={handleSubmit}>
          <label>
            <strong>You:</strong>{" "}
            <input type="text" value={userInput} onChange={handleUserInput} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
