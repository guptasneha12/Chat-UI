import React from 'react';
import { Provider } from 'react-redux';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';
import store from './redux/store';
import { Box, Typography } from '@mui/material';

function App() {
  return (
    <Provider store={store}>
      <Box sx={{
        width: '100vw', height: '100vh',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center',
        background: 'linear-gradient(135deg, #4fc3f7, #1e88e5)',
      }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#fff', marginBottom: '20px' }}>
          Chat Interface
        </Typography>
        <ChatWindow />
        <MessageInput />
      </Box>
    </Provider>
  );
}

export default App;
