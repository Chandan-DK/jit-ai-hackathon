// src/components/AI.js
import React, { useState } from "react";
//import aiService from ".../services/aiServices";
import "./AI.css";

const AI = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleChatRequest = async () => {
    try {
      setLoading(true);
      //const result = await aiService.sendChatRequest(inputText);
      // setOutputText(result);
    } catch (error) {
      // Handle error, set error state, display a message, etc.
      console.error("Error in chat request:", error.message);
      setOutputText("Error: Unable to fetch data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-container">
      <h2>Chat with AI</h2>
      <div className="chat-container">
        <div className="input-container">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Type your message..."
          />
          <button onClick={handleChatRequest} disabled={loading}>
            {loading ? "Loading..." : "Send"}
          </button>
        </div>
        <div className="output-container">
          <p>{outputText}</p>
        </div>
      </div>
    </div>
  );
};

export default AI;
