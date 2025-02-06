import { createTheme } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    primary: {
      main: '#1976d2',
    },
  },
});

export const globalStyles = (
  <GlobalStyles
    styles={{
      '@keyframes dot-flashing': {
        '0%': { opacity: 0.2, transform: 'translateY(0)' },
        '20%': { opacity: 1, transform: 'translateY(-2px)' },
        '100%': { opacity: 0.2, transform: 'translateY(0)' }
      },
      body: {
        margin: 0,
        padding: 0,
        '& .dot-flashing': {
          position: 'relative',
          display: 'inline-flex',
          gap: '4px',
          '&::before, &::after': {
            content: '""',
            display: 'block',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            animation: 'dot-flashing 1s infinite linear',
            backgroundColor: 'currentColor'
          },
          '&::before': {
            animationDelay: '0.2s',
            marginRight: '4px'
          },
          '&::after': {
            animationDelay: '0.4s',
            marginLeft: '4px'
          }
        }
      }
    }}
  />
);