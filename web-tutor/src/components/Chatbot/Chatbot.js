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
