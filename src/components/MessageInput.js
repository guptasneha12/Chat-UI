import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage, receiveMessage } from '../redux/chatSlice';
import { Box, TextField, Button } from '@mui/material';

const MessageInput = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSend = () => {
    if (input.trim()) {
      dispatch(sendMessage(input)); // Dispatch the user's message

      // Trigger the bot's reply with the user's message
      setTimeout(() => {
        dispatch(receiveMessage(input)); // Pass user's message to generate bot's reply
      }, 1000);

      setInput(''); // Clear input field after sending
    }
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, padding: 2, width: '100%', maxWidth: '600px' }}>
      <TextField
        value={input}
        onChange={(e) => setInput(e.target.value)}
        fullWidth
        label="Type your message..."
        variant="outlined"
        sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSend}
        sx={{ padding: '15px 25px', borderRadius: '10px', boxShadow: '0 3px 8px rgba(0, 0, 0, 0.2)' }}
      >
        Send
      </Button>
    </Box>
  );
};

export default MessageInput;
