'use client';

import { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from '../styles/theme';
import { ChatHeader } from '../components/ChatInterace/ChatHeader';
import ChatInterface from '../components/ChatInterace';

export default function Home() {
  const [themeMode, setThemeMode] = useState('light');

  const clearHistory = () => {
    localStorage.removeItem('chatHistory');
    setMessages([]);
  };

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ChatHeader themeMode={themeMode} toggleTheme={toggleTheme} clearHistory={clearHistory} />
      <ChatInterface />
    </ThemeProvider>
  );
}