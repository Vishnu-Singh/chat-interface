import { createTheme } from '@mui/material/styles';

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
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
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
              animation: 'dot-flashing 1s infinite linear'
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
      }
    }
  }
});