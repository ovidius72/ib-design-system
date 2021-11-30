import { IBThemeProvider } from '../Providers/ThemeProvider';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
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
