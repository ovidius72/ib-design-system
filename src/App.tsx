/* eslint-disable */
import React, { useState } from 'react';
import { IBBox } from './components/Box/Box';
import { IBButton } from './components/Button/Button';
import IBDoublePanel from './components/DoublePanel';

export const App = () => {

  const [panelOpen, setPanelOpen] = useState(false);
  const [subPanelOpen, setSubPanelOpen] = useState(false);

  const handleToggleMainPanel = () => setPanelOpen(!panelOpen);

  const handleToggleSubPanel = (value?: boolean) =>
    typeof value === 'boolean'
      ? setSubPanelOpen(value)
      : setSubPanelOpen(!subPanelOpen);

  const mainChildrenContent = () => {
    return (
      <div>
        <h1>MAIN CONTENT</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          assumenda eos hic repudiandae inventore dolore voluptate fugit quidem
          non officiis! Quisquam maxime modi quibusdam, iure dolor nobis eveniet
          consequuntur tempore.
        </p>
        <IBButton
          text="Open Sub Panel"
          onClick={() => handleToggleSubPanel()}
        />
      </div>
    );
  };

  const subChildrenContent = () => {
    return (
      <div>
        <div>
          <h3>Sub Content List</h3>
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <IBBox p={2}>
      <IBBox mb={4}>
        App.tsx: You can test your components here for a realistic experience
      </IBBox>

      <IBBox mb={4}>1) IBDoublePanel</IBBox>

      <IBButton text="Open Sidebar" onClick={() => setPanelOpen(true)} />
      <IBDoublePanel
        headerText={'Main Header'}
        subHeaderText={'Sub Header'}
        toggleMainPanel={handleToggleMainPanel}
        toggleSubPanel={handleToggleSubPanel}
        isMainPanelOpen={panelOpen}
        isSubPanelOpen={subPanelOpen}
        mainChildren={mainChildrenContent()}
        subChildren={subChildrenContent()}
      />
    </IBBox>
  );
};
export default App;
