import React, { useContext } from 'react';
import { IBThemeContext } from '../Providers/ThemeProvider';
import { IBBox } from './components/Box/Box';
import { IBButton } from './components/Button/Button';

export const App = () => {
  const { theme, setLightTheme, setDarkTheme, palette } =
    useContext(IBThemeContext);
  return (
    <div>
      <div>
        <div>Current theme: {theme}</div>
        <IBButton text="Ligh Theme" onClick={setLightTheme} />
        <IBButton text="Dark Theme" onClick={setDarkTheme} />
      </div>
      <div>
        <p>Box</p>
        <IBBox p={2} m={0} bg={palette.themePrimary}>
          This is a box
        </IBBox>
      </div>
      {/* <GlobalStyle /> */}
      <p> Default Button </p>
      <div>
        <IBButton text="Test button" />
      </div>
      <div>
        <p> Primaty Button </p>
        <IBButton variant="primary" text="Test button" />
      </div>
      <div>
        <p> Loading Button </p>
        <IBButton loading variant="primary" text="Test button" />
      </div>
    </div>
  );
};
export default App;
