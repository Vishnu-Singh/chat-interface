'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme, globalStyles } from '../styles/theme';
import ChatInterface from '../components/ChatInterace';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}
      <ChatInterface />
    </ThemeProvider>
  );
}