import React from 'react';
import Landing from './views/page/landing'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1C2541',
    },
    secondary: {
      main: '#5BC0BE',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Landing />
    </ThemeProvider>
  );
}

export default App;
