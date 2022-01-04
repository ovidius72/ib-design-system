import { initializeIcons } from '@fluentui/font-icons-mdl2';
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
