import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, List, ListItem } from '@mui/material';
import './style.css';

const ChatWindow = () => {
  const { messages } = useSelector((state) => state.chat);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Box
      className="chatWindow"
      sx={{
        background: 'linear-gradient(135deg, #f5f5f5, #e0f7fa)',
        padding: '20px',
        borderRadius: '15px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '600px',
        height: '70vh',
        overflowY: 'auto',
      }}
    >
      <List>
        {messages.map((msg, index) => (
          <ListItem
            key={index}
            sx={{
              display: 'flex',
              justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start', // Right for user, left for bot
              marginBottom: '10px',
            }}
          >
            <Box
              sx={{
                padding: '10px',
                borderRadius: '15px',
                background: msg.sender === 'user' ? '#1976d2' : '#e0e0e0', // Blue for user, grey for bot
                color: msg.sender === 'user' ? '#fff' : '#000',
                maxWidth: '60%', // Limit bubble width
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Typography variant="body1">{msg.text}</Typography>
              <Typography
                variant="caption"
                sx={{
                  display: 'block',
                  marginTop: '5px',
                  textAlign: msg.sender === 'user' ? 'right' : 'left', // Align timestamp based on sender
                  color: 'black',
                }}
              >
                {msg.timestamp}
              </Typography>
            </Box>
          </ListItem>
        ))}
        <div ref={chatEndRef} />
      </List>
    </Box>
  );
};

export default ChatWindow;
