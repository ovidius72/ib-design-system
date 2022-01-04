import { PanelType } from '@fluentui/react';
import React, { useContext, useState } from 'react';
import { IBThemeContext } from '../Providers/ThemeProvider';
import { IBBox } from './components/Box/Box';
import { IBButton } from './components/Button/Button';
import { IBFlex } from './components/Flex/Flex';
import { IBResult } from './components/Result/Result';
import { IBSidebar } from './components/Sidebar/Sidebar';
import { IBSpace } from './components/Space/Space';
import { IBText } from './components/Text/Text';

export const App = () => {
  const [panelOpen, setPanelOpen] = useState(false);
  const [subPanelOpen, setSubPanelOpen] = useState(false);

  const { themeName, setLightTheme, setDarkTheme, theme } =
    useContext(IBThemeContext);
  return (
    <IBBox p={2}>
      <div>
        <div>Current theme: {themeName}</div>
        <p>Space:</p>
        <IBBox height={150} display="flex">
          <IBSpace
            vertical
            fluid
            hAlign="stretch"
            style={{ backgroundColor: 'green' }}
          >
            <IBButton fluid text="Ligh Theme" onClick={setLightTheme} />
            <IBButton fluid text="Dark Theme" onClick={setDarkTheme} />
            <IBBox
              display="flex"
              flex={1}
              style={{
                backgroundColor: 'red',
                textAlign: 'center',
              }}
            >
              Test
            </IBBox>
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
          <IBBox p={2} flex={3} m={0} bg={theme.palette.themePrimary}>
            <p>This is another paragraph inside a BOX</p>
          </IBBox>
          <IBBox flex={2} />
          <IBBox
            p={2}
            color={theme.palette.neutralDark}
            flex={8}
            m={0}
            bg={theme.palette.neutralLight}
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
      <IBButton text="Open Sidebar" onClick={() => setPanelOpen(true)} />
      <IBSidebar
        isOpen={panelOpen}
        type={PanelType.medium}
        onClose={() => {
          setPanelOpen(false);
          setSubPanelOpen(false);
        }}
        subPanel={{
          subPanelContent: 'Ciao',
          isOpen: subPanelOpen,
          onClose: () => {
            setSubPanelOpen(false);
          },
        }}
      >
        <IBButton onClick={() => setSubPanelOpen(true)} text="Open SubPanel" />
        Content
      </IBSidebar>
      <IBBox>
        <p>Result:</p>
        <IBResult status="info" header="Info" subHeader="Sub header" />
        <IBResult status="warning" header="Warning" subHeader="Sub header" />
        <IBResult status="error" header="Error" subHeader="Sub header" />
        <IBResult
          status="success"
          extra={
            <IBSpace size="large">
              <IBButton text="OK" variant="primary" />
              <IBButton text="Cancel" />
            </IBSpace>
          }
          header="Success"
          subHeader="Sub header"
        >
          <div>Footer Content</div>
        </IBResult>
      </IBBox>
    </IBBox>
  );
};
export default App;
