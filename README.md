# 🤖 AI JavaScript Translator API

An AI-powered RESTful API built using **Node.js**, **Express**, **LangChain**, and **OpenAI's GPT-3.5-turbo**, designed to provide natural language answers and code snippets for JavaScript-related queries. This API is perfect for developers who want instant help and code generation using modern AI capabilities.

---

## 🚀 Features

- Accepts `POST` requests with natural language questions
- Uses `GPT-3.5-turbo` via `LangChain` for intelligent responses
- Returns structured `JSON` responses with:
  - JavaScript code snippets
  - Human-readable explanations
- API keys securely managed using `dotenv`
- Clean and modular structure
- Testable with tools like **Postman** or **Insomnia**

---

## 📂 Project Structure

```text
AI-JavaScript-Translator-API/
├── server.js              # Entry point of the app
├── prompts/               # Folder containing prompt templates
│   └── translatorPrompt.js
├── .env                   # Environment variables (OpenAI API Key)
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
```


## 🛠️ Technologies Used

- Node.js  
- Express.js  
- LangChain (JavaScript version)  
- OpenAI GPT-3.5-turbo  
- dotenv  
- JavaScript (ES6+)  

---

## 📥 Installation & Usage

### 1. Clone the Repository

```bash
git clone https://github.com/Ahnuf-Karim-Chowdhury/AI-Powered-JavaScript-Translator-API-with-LangChain-GPT-3.5.git
cd AI-Powered-JavaScript-Translator-API-with-LangChain-GPT-3.5
```
### 2. Install Dependencies

```bash
npm install
```
### 3. Install Dependencies

Run the following command in your project root to install the required packages:

```bash
npm install express dotenv openai langchain
```

### 4. Add Environment Variables
Create a `.env` file in the root directory and add your OpenAI API key:
```bash
OPENAI_API_KEY=your_openai_api_key_here
```
🔒 Never share or commit your `.env` file to a public repository.

### 5. Run the Application
```bash
node server.js
```
You Should See :
```bash
🌐 Translator API running at http://localhost:3000
```

## 🧪 Testing the API

You can use **Postman**, **Insomnia**, or any HTTP client to test your API.

---

### 📤 Sample POST Request

- **Endpoint:** `http://localhost:3000/translate`
- **Method:** `POST`
- **Headers:**
  - `Content-Type: application/json`
- **Body:**

```json
{
  "text": "How do I use async/await in JavaScript?"
}
```
```json
{
  "explanation": "Async/await allows you to write asynchronous code in a synchronous style...",
  "code": "async function fetchData() {\n  try {\n    const response = await fetch('url');\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error(error);\n  }\n}"
}
```

## ⚙️ How It Works

1. A user sends a `POST` request to the `/translate` endpoint with a JavaScript question or code snippet in the request body.
2. The server receives the input and feeds it into a **LangChain prompt template** using `ChatOpenAI`.
3. The **GPT-3.5-turbo** model processes the request and generates a structured explanation and code snippet.
4. A **StructuredOutputParser** formats the model’s response into a JSON object with `explanation` and `code`.
5. The API sends the structured JSON response back to the client.

---

## 📌 Notes

- Ensure your **OpenAI API key** has access to **GPT-3.5-turbo**.
- You may hit **rate limits** or encounter **quota errors** if usage exceeds your OpenAI plan.
- For further help or documentation, refer to:
  - [LangChain JS Documentation](https://js.langchain.com)
  - [OpenAI API Documentation](https://platform.openai.com/docs)

---




