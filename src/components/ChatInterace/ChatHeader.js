import { IconButton, Toolbar, Typography } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DeleteIcon from '@mui/icons-material/Delete';

export const ChatHeader = ({ themeMode, toggleTheme, clearHistory }) => {
  return (
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Deepseek R1 Chat
      </Typography>
      <IconButton onClick={clearHistory} color="inherit" title="Clear History">
        <DeleteIcon />
      </IconButton>
      <IconButton onClick={toggleTheme} color="inherit" title="Toggle Theme">
        {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Toolbar>
  );
};