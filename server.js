require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { ChatOpenAI } = require("@langchain/openai");
const { PromptTemplate } = require("@langchain/core/prompts");
const { StructuredOutputParser } = require("@langchain/core/output_parsers");


const app = express();
const port = 3000;

// LangChain model setup
const model = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0.3,
  model: "gpt-3.5-turbo",
});

// Output parser: Define structure of response
const parser = StructuredOutputParser.fromNamesAndDescriptions({
  translatedText: "The translated version of the input text",
  language: "The target language used for the translation"
});

const formatInstructions = parser.getFormatInstructions();

// Prompt template with format instructions
const prompt = new PromptTemplate({
  template: `You are a translation expert. Translate the following text into the specified target language.

{format_instructions}

Text: {text}
Language: {targetLang}`,
  inputVariables: ["text", "targetLang"],
  partialVariables: { format_instructions: formatInstructions }
});

// Function to handle prompt formatting and model response
const promptFunc = async (text, targetLang) => {
  try {
    const formattedPrompt = await prompt.format({ text, targetLang });
    const response = await model.invoke(formattedPrompt);

    try {
      const parsed = await parser.parse(response);
      return parsed;
    } catch (err) {
      return { error: "Failed to parse response", raw: response };
    }
  } catch (err) {
    console.error("PromptFunc Error:", err.message);
    throw err;
  }
};

// Middleware
app.use(bodyParser.json());

// POST route
app.post("/translate", async (req, res) => {
  const { text, targetLang } = req.body;

  if (!text || !targetLang) {
    return res.status(400).json({ error: "Missing 'text' or 'targetLang' in request body." });
  }

  try {
    const result = await promptFunc(text, targetLang);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`🌐 Translator API running at http://localhost:${port}`);
});
