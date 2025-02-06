import dynamic from 'next/dynamic';
import { Box } from '@mui/material';
import { ChatHeader } from './ChatHeader';
import { InputArea } from './InputArea';

const MessageList = dynamic(() => import('./MessageList'), { ssr: false });

export default function ChatInterface() {
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
}