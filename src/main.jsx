import React from 'react'
import ReactDOM from 'react-dom/client'
import AirQualityApp from './AirQualityApp'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, ThemeProvider } from '@mui/material';
import { getEnvVariables } from './helpers';

const theme = createTheme({
  palette: {
    primary: {
      light: '#E1FFA1',
      main: '#8CB23A',
      dark: '#A9BF78',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ECA163',
      main: '#E8771D',
      dark: '#B55D16',
      contrastText: '#fff',
    },
  },

});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AirQualityApp />
    </ThemeProvider>
  </React.StrictMode>,
)
