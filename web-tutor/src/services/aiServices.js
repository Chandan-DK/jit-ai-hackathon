// services/aiService.js
const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

const sendChatRequest = async (inputText) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ input: inputText }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result.output;
  } catch (error) {
    console.error("Error sending chat request:", error.message);
    throw new Error("Error sending chat request");
  }
};

export default {
  sendChatRequest,
};
