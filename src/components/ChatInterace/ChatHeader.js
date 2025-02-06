import { AppBar, Box, Container, Typography } from '@mui/material';

export const ChatHeader = () => (
  <AppBar 
    position="static" 
    color="inherit"
    sx={{ 
      boxShadow: 'none',
      borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      backgroundColor: 'background.default'
    }}
  >
    <Container maxWidth="lg">
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        minHeight: '60px',
        padding: '0 1rem'
      }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Deepseek R1
        </Typography>
      </Box>
    </Container>
  </AppBar>
);