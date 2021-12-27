/* eslint-disable */
import React from 'react';
import { IBBox } from './components/Box/Box';

export const App = () => {
  

  return (
    <IBBox p={2}>
      <IBBox mb={4}>
        App.tsx: You can test your components here for a realistic experience
      </IBBox>
      <IBBox mb={4}>
        Component: <strong>start testing a component here</strong>
      </IBBox>
    </IBBox>
  );
};
export default App;
