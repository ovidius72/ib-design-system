import React, { useContext } from 'react';
import { IBThemeContext } from '../Providers/ThemeProvider';
import { IBBox } from './components/Box/Box';
import { IBButton } from './components/Button/Button';
import { IBFlex } from './components/Flex/Flex';
import { IBSpace } from './components/Space/Space';
import { IBText } from './components/Text/Text';

export const App = () => {
  const { theme, setLightTheme, setDarkTheme, palette } =
    useContext(IBThemeContext);
  return (
    <IBBox p={2}>
      <div>
        <div>Current theme: {theme}</div>
        <IBBox>
          <p>Space:</p>
          <IBSpace size="medium" vertical>
            <IBButton text="Ligh Theme" onClick={setLightTheme} />
            <IBButton text="Dark Theme" onClick={setDarkTheme} />
          </IBSpace>
        </IBBox>
      </div>
      <div>
        <p>Box:</p>
        <IBFlex
          flexDirection="row"
          justifyContent="space-between"
          alignContent="space-between"
        >
          <IBBox p={2} flex={3} m={0} bg={palette.themePrimary}>
            <p>This is another paragraph inside a BOX</p>
          </IBBox>
          <IBBox flex={2} />
          <IBBox
            p={2}
            color={palette.neutralDark}
            flex={8}
            m={0}
            bg={palette.neutralLight}
          >
            <IBText textAlign="right">
              This is another paragraph inside a BOX
            </IBText>
          </IBBox>
        </IBFlex>
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
    </IBBox>
  );
};
export default App;
