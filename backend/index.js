// backend/index.js

const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');
const { systemPrompt } = require('./resumeData');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'meta-llama/llama-4-scout-17b-16e-instruct',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userMessage }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
//     const Groq = require('groq-sdk');

// const groq = new Groq();
// async function main() {
//   const chatCompletion = await groq.chat.completions.create({
//     "messages": [userMessage],
//     "model": "meta-llama/llama-4-scout-17b-16e-instruct",
//     "temperature": 1,
//     "max_completion_tokens": 1024,
//     "top_p": 1,
//     "stream": true,
//     "stop": null
//   });

//   for await (const chunk of chatCompletion) {
//     process.stdout.write(chunk.choices[0]?.delta?.content || '');
//   }
// }

// main();
    
  
);
    const botReply = response.data.choices[0].message.content;
    res.json({ reply: botReply });

  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ reply: 'Something went wrong. Try again later.' });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`✅ Backend running`));
