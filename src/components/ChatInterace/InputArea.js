import { useChat } from '../../hooks/useChat';
import { 
  Box, 
  Container, 
  TextField, 
  Button 
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export const InputArea = () => {
  const { input, setInput, loading, handleSend } = useChat();

  return (
    <Box sx={{ 
      borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      padding: '2rem 0',
      backgroundColor: 'background.default'
    }}>
      <Container maxWidth="lg" sx={{ padding: '0 1rem' }}>
        <Box sx={{ 
          position: 'relative',
          borderRadius: '8px',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          backgroundColor: 'background.paper'
        }}>
          <TextField
            fullWidth
            multiline
            minRows={1}
            maxRows={8}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                padding: '1rem',
                paddingRight: '4rem',
                '& fieldset': { border: 'none' }
              }
            }}
            placeholder="Send a message..."
            disabled={loading}
          />
          <Button
            variant="contained"
            color="primary"
            disabled={!input.trim() || loading}
            onClick={handleSend}
            sx={{
              position: 'absolute',
              right: '0.75rem',
              bottom: '0.75rem',
              minWidth: 'auto',
              borderRadius: '4px',
              padding: '0.5rem',
              '&:disabled': {
                backgroundColor: (theme) => 
                  theme.palette.mode === 'dark' ? '#2d2d2d' : '#f5f5f5'
              }
            }}
          >
            <SendIcon sx={{ fontSize: '1.25rem' }} />
          </Button>
        </Box>
      </Container>
    </Box>
  );
};