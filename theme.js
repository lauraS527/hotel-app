import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Azul estándar de Material-UI
    },
    secondary: {
      main: '#ff4081', // Rosa estándar de Material-UI
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;
