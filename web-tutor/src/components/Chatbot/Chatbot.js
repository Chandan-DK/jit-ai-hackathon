import React, { useState } from "react";

const BotResponses = [
  {
    response_type: "greeting",
    user_input: ["hello", "hi", "hey"],
    bot_response: "Hey there!",
    required_words: [],
  },
  {
    response_type: "greeting",
    user_input: ["see you", "goodbye", "bye"],
    bot_response: "See you later!",
    required_words: [],
  },
  {
    response_type: "greeting",
    user_input: ["nice", "to", "meet", "you"],
    bot_response: "The pleasure is all mine!",
    required_words: ["nice", "meet", "you"],
  },
  {
    response_type: "question",
    user_input: ["how", "to", "learn", "code", "coding", "apps"],
    bot_response: "Start by typing: 'How to learn coding' on Google.",
    required_words: ["learn", "code"],
  },
  {
    response_type: "question",
    user_input: ["refund", "how", "can", "I", "get"],
    bot_response: "We don't offer refunds for free education.",
    required_words: ["refund", "i"],
  },
  {
    response_type: "question",
    user_input: ["how", "are", "you"],
    bot_response: "I'm great! Thanks for asking.",
    required_words: ["how", "are", "you"],
  },
];

const RandomResponses = [
  "Please try writing something more descriptive.",
  "Oh! It appears you wrote something I don't understand yet",
  "Do you mind trying to rephrase that?",
  "I'm terribly sorry, I didn't quite catch that.",
  "I can't answer that yet, please try asking something else.",
];

const getRandomResponse = () => {
  const randomIndex = Math.floor(Math.random() * RandomResponses.length);
  return RandomResponses[randomIndex];
};

const getBotResponse = (inputString) => {
  const splitMessage = inputString.toLowerCase().split(/\s+|[,;?!.-]\s*/);
  const scoreList = [];

  // Check all the responses
  BotResponses.forEach((response) => {
    let responseScore = 0;
    let requiredScore = 0;
    const requiredWords = response.required_words;

    // Check if there are any required words
    if (requiredWords.length > 0) {
      splitMessage.forEach((word) => {
        if (requiredWords.includes(word)) {
          requiredScore += 1;
        }
      });
    }

    // Amount of required words should match the required score
    if (requiredScore === requiredWords.length) {
      // Check each word the user has typed
      splitMessage.forEach((word) => {
        // If the word is in the response, add to the score
        if (response.user_input.includes(word)) {
          responseScore += 1;
        }
      });
    }

    // Add score to list
    scoreList.push(responseScore);
  });

  // Find the best response and return it if they're not all 0
  const bestResponse = Math.max(...scoreList);
  const responseIndex = scoreList.indexOf(bestResponse);

  // If there is no good response, return a random one.
  if (bestResponse !== 0) {
    return BotResponses[responseIndex].bot_response;
  }

  return getRandomResponse();
};

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [botResponse, setBotResponse] = useState("");

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const response = getBotResponse(userInput);
    setBotResponse(response);
  };

  return (
    <div>
      <div>
        <strong>Bot:</strong> {botResponse}
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          <strong>You:</strong>{" "}
          <input type="text" value={userInput} onChange={handleUserInput} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Chatbot;
