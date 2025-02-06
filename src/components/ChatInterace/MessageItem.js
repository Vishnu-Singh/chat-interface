import { ListItem, Paper, Typography } from '@mui/material';
import dynamic from 'next/dynamic';

const SyntaxHighlighter = dynamic(
  () => import('react-syntax-highlighter').then(mod => mod.Prism),
  { 
    ssr: false,
    loading: () => (
      <Typography component="div" sx={{ color: 'text.secondary' }}>
        Loading code...
      </Typography>
    )
  }
);

const materialDark = dynamic(
  () => import('react-syntax-highlighter/dist/esm/styles/prism').then(mod => mod.materialDark),
  { ssr: false }
);

export const MessageItem = ({ content, role, error }) => {
  const renderMessageContent = (content) => {
    // ... (same code block parsing logic as previous version)
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