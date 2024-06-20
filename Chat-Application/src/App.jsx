import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import './App.css';

const socket = io("http://localhost:3001");

const App = () => {
  const [messages, setMessages] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  const sendMessage = () => {
    const message = inputRef.current.value;
    if (message.trim()) {
      socket.emit("message", message);
      inputRef.current.value = "";
    }
  };

  return (
    <div className="chat-container">
      <h1 className="chat-heading">Chat Application</h1>
      <ChatWindow messages={messages} />
      <ChatInput inputRef={inputRef} sendMessage={sendMessage} />
    </div>
  );
};

const ChatWindow = ({ messages }) => (
  <div className="chat-window">
    {messages.length === 0 ? (
      <p className="no-messages">No messages yet. Start chatting!</p>
    ) : (
      messages.map((msg, index) => (
        <div key={index} className="chat-message">{msg}</div>
      ))
    )}
  </div>
);

const ChatInput = ({ inputRef, sendMessage }) => (
  <div className="chat-input">
    <input ref={inputRef} type="text" placeholder="Type a message..." />
    <button onClick={sendMessage}>Send</button>
  </div>
);

export default App;
