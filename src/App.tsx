import React from 'react';
import { IBButton } from './components/Button/Button';

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

// const Box = styled.div<LayoutProps & SpaceProps>`
//   ${layout};
//   ${space};
//   box-sizing: border-box;
//   background-color: green;
//   padding: 1em;
// `;

export const App = () => {
  return (
    <div>
      {/* <GlobalStyle /> */}
      <p> Default Button </p>
      <div>
        <IBButton text="Test button" />
      </div>
      <div>
        <p> Primaty Button </p>
        <IBButton variant="primary" text="Test button" />
      </div>
    </div>
  );
};
export default App;
