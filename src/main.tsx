import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { StyledEngineProvider, ThemeProvider } from '@mui/material';

import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';

import { Provider } from 'react-redux';
import { store } from './redux/app/store.ts';
import theme from './theme/theme.ts';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
)
