// frontend/src/ChatBot.js

import React, { useState } from 'react';
import axios from 'axios';

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    const newMessages = [...messages, { from: "user", text: input }];
    setMessages(newMessages);
  
    try {
      const res = await axios.post('http://portfolio-production-50f2.up.railway.app:8080', {
        message: input
      });
  
      setMessages([...newMessages, { from: "bot", text: res.data.reply }]);
    } catch (error) {
      console.error('Axios Error:', error);
      setMessages([...newMessages, { from: "bot", text: `Error: ${error.message}` }]);
    }
  
    setInput("");
  };

  return (
    // <div style={{ padding: 20 }}>
    //   <h2 style={{ color: '#c770f0' }}>Resume Chatbot</h2>
    //   <div style={{ marginBottom: 10 }}>
    //     {messages.map((msg, i) => (
    //       <div key={i} style={{ textAlign: msg.from === "user" ? "right" : "left" }}>
    //         <p><strong>{msg.from}:</strong> {msg.text}</p>
    //       </div>
    //     ))}
    //   </div>
    //   <input
    //     value={input}
    //     onChange={e => setInput(e.target.value)}
    //     onKeyDown={e => e.key === 'Enter' && sendMessage()}
    //     placeholder="Ask something about resume..."
    //   />
    //   <button onClick={sendMessage}>Send</button>
    // </div>
    <div style={{ padding: 20 }}>
        <h2 style={{ color: '#c770f0' }}>Resume Chatbot</h2>
        <div style={{ marginBottom: 10 }}>
            {messages.map((msg, i) => (
            <div key={i} style={{ textAlign: msg.from === "user" ? "right" : "left" }}>
                <p style={{ color: '#c770f0' }}>
                <strong>{msg.from}:</strong> {msg.text}
                </p>
            </div>
            ))}
        </div>
        <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage()}
            placeholder="Ask something about resume..."
            style={{ color: '#c770f0' }} // Optional: input text color
        />
        <button onClick={sendMessage}>Send</button>
    </div>

  );
}

export default ChatBot;
