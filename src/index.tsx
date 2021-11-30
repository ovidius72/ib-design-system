import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { IBThemeProvider } from '../Providers/ThemeProvider';
import App from './App';

const root = document.getElementById('root');

ReactDOM.render(
  <StrictMode>
    <IBThemeProvider>
      <App />
    </IBThemeProvider>
  </StrictMode>,
  root,
);
