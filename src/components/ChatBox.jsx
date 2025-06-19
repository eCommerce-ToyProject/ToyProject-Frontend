// src/components/ChatBox.jsx
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io("http://<서버_IP>:3001"); // 🔁 채팅 서버 주소 입력

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    socket.on("chat", msg => {
      setMessages(prev => [...prev, msg]);
    });

    return () => {
      socket.off("chat");
    };
  }, []);

  const sendMessage = () => {
    if (input.trim() !== "") {
      socket.emit("chat", input);
      setInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div style={{ width: 300 }}>
      {/* 메시지 영역 */}
      <div
        style={{
          height: 600,
          overflowY: 'auto',
          border: '1px solid #ccc',
          padding: 10,
          borderRadius: 4,
          backgroundColor: '#f9f9f9',
        }}
      >
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: 8 }}>{msg}</div>
        ))}
      </div>

      {/* 입력 영역 */}
      <div style={{ marginTop: 10, display: 'flex', gap: 8 }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{
            flex: 1,
            padding: '8px',
            borderRadius: 4,
            border: '1px solid #ccc',
            fontSize: 14,
          }}
          placeholder="메시지를 입력하세요"
        />
        <button
          onClick={sendMessage}
          style={{
            padding: '8px 12px',
            backgroundColor: '#4FC3F7', // 하늘색
            color: 'white',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          전송
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
