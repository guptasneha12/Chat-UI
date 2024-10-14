import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
  user: 'user', // Mock user
};

const generateBotReply = (userMessage) => {
  // Add logic for different bot responses based on user input
  if (userMessage.toLowerCase().includes('hello')) {
    return 'Hello! How can I assist you today?';
  } else if (userMessage.toLowerCase().includes('help')) {
    return 'Sure! What do you need help with?';
  } else if (userMessage.toLowerCase().includes('time')) {
    return `The current time is ${new Date().toLocaleTimeString()}`;
  } else if (userMessage.toLowerCase().includes('weather')) {
    return 'I cannot give you live weather updates, but it’s always good to check your local forecast!';
  } else if (userMessage.toLowerCase().includes('thanks')) {
    return 'You’re welcome! Feel free to ask me anything.';
  } else {
    return 'I’m sorry, I didn’t understand that. Could you please rephrase?';
  }
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push({
        text: action.payload,
        sender: 'user', // Mark the sender as user
        timestamp: new Date().toLocaleTimeString(),
      });
    },
    receiveMessage: (state, action) => {
      const botReply = generateBotReply(action.payload);
      state.messages.push({
        text: botReply,
        sender: 'bot', // Mark the sender as bot
        timestamp: new Date().toLocaleTimeString(),
      });
    },
  },
});

export const { sendMessage, receiveMessage } = chatSlice.actions;

export default chatSlice.reducer;
