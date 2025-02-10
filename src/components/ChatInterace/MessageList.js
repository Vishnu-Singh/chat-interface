'use client';

import { Box, Container, List } from '@mui/material';
import { MessageItem } from './MessageItem';
import { LoadingIndicator } from './LoadingIndicator';
import { useChat } from '../../hooks/useChat';

const MessageList = () => {
  const { messages, loading, messagesEndRef } = useChat();
  console.log("message: ",messages)
  return (
    <Box sx={{ 
      flex: 1, 
      overflow: 'auto', 
      padding: '2rem 0',
      backgroundColor: (theme) => theme.palette.background.default
    }}>
      <Container maxWidth="lg" sx={{ padding: '0 1rem' }}>
        <List sx={{ padding: 0 }}>
          {messages.map((message, index) => (
            <MessageItem 
              key={index}
              content={message.content}
              role={message.role}
              error={message.error}
            />
          ))}
          {loading && <LoadingIndicator />}
          <div ref={messagesEndRef} />
        </List>
      </Container>
    </Box>
  );
};

export default MessageList;