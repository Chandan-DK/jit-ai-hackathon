const express = require("express");
const router = express.Router();
const openaiController = require("../api/openai");

router.post("/chat", openaiController.chat);

module.exports = router;
