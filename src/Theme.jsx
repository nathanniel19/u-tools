import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#FF9800',
    },
    secondary: {
      main: '#F57C00',
    },
  },
  typography: {
    fontFamily: "Nunito"
  }
});

export default Theme;