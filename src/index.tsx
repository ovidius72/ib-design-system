import { initializeIcons } from '@fluentui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { IBThemeProvider } from '../Providers/ThemeProvider';
import App from './App';

const root = document.getElementById('root');
initializeIcons();

ReactDOM.render(
  <StrictMode>
    <IBThemeProvider>
      <App />
    </IBThemeProvider>
  </StrictMode>,
  root,
);
