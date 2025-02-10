import { ListItem, Paper, Typography } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const MessageItem = ({ content, role, error }) => {
  const renderMessageContent = (content) => {
    // ... (keep existing code block parsing logic)
  };

  return (
    <ListItem
      sx={{
        justifyContent: role === 'user' ? 'flex-end' : 'flex-start',
        padding: '0.5rem 0',
        alignItems: 'flex-start'
      }}
    >
      <Paper
        sx={(theme) => ({
          maxWidth: '90%',
          padding: '1rem',
          borderRadius: '8px',
          backgroundColor: role === 'user' 
            ? theme.palette.mode === 'dark' ? '#2a2a2a' : '#f0f0f0'
            : theme.palette.mode === 'dark' ? '#2d2d2d' : '#f5f5f5',
          border: error 
            ? `1px solid ${theme.palette.error.main}`
            : 'none'
        })}
      >
        {renderMessageContent(content)}
      </Paper>
    </ListItem>
  );
};