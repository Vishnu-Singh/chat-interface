import React from 'react'
import { Box, Container, List, CircularProgress } from '@mui/material';

function LoadingIndicator() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
            <CircularProgress />
    </Box>
  )
}

export default LoadingIndicator