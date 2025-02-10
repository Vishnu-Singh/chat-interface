'use client';

import { Box } from '@mui/material';
import dynamic from 'next/dynamic';
import { ChatHeader } from './ChatHeader';
import { InputArea } from './InputArea';
import MessageList from './MessageList'; // Changed to direct import

const ChatInterface = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100vh',
      backgroundColor: (theme) => 
        theme.palette.mode === 'dark' ? '#171717' : '#ffffff'
    }}>
      <ChatHeader />
      <MessageList />
      <InputArea />
    </Box>
  );
};

export default ChatInterface;