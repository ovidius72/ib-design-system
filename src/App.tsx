import { PrimaryButton } from '@fluentui/react';
import React from 'react';
import styled from 'styled-components';
// import { createGlobalStyle } from 'styled-components/macro';
import { layout, LayoutProps, space, SpaceProps } from 'styled-system';

// const GlobalStyle = createGlobalStyle`
//   body {
//     font-size: 1em;
//     margin: 0;
//     background-color: white;
//     padding: 0;
//     color: #404040;
//     font-family: Roboto, sans-serif;
//     max-width: 1200px;
//     margin: 0 auto;
//     border: 1px solid #e3e3e3;
//   }
//   * {
//   box-sizing: border-box;
//   }
// `;

const Box = styled.div<LayoutProps & SpaceProps>`
  ${layout};
  ${space};
  box-sizing: border-box;
  background-color: green;
  padding: 1em;
`;

export const App = () => {
  return (
    <div>
      <h2 style={{ backgroundColor: 'violet' }}>My React App</h2>
      <PrimaryButton>Test</PrimaryButton>
      <Box m={1} px={10} width={[1, 1 / 4, 1 / 2, 1]}>
        Inside a BOX
      </Box>
      <div>Test</div>
      {/* <GlobalStyle /> */}
    </div>
  );
};
export default App;
