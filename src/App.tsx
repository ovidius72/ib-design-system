/* eslint-disable */
import React, { useState } from 'react';
import { IBBox } from './components/Box/Box';
import { IBButton } from './components/Button/Button';
import IBDoublePanel from './components/DoublePanel';

export const App = () => {
  const [mainPanelOpen, setMainPanelOpen] = useState(false);
  const [subPanelOpen, setSubPanelOpen] = useState(false);

  const handleDismissMainPanel = () => {
    if (!mainPanelOpen) return;
    setMainPanelOpen(false)
    setSubPanelOpen(false)
    return;
  };

  const handleOpenMainPanel = () => !mainPanelOpen && setMainPanelOpen(true);

  const handleOpenSubPanel = () => !subPanelOpen && setSubPanelOpen(true);

  const mainChildrenContent = () => {
    return (
      <div>
        <div
          style={{ fontSize: '1.5rem', cursor: 'pointer' }}
          onClick={handleOpenSubPanel}
        >
          <h3>This is the Main Panel</h3>
          <p>
            Click anywhere in the article to open sub panel.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illo
            dolorem quam aliquid dolore sequi unde praesentium, quo est. Dicta
            exercitationem hic voluptate ratione quae, suscipit beatae saepe ut
            necessitatibus.
          </p>
          <img src="https://picsum.photos/1000/200" alt="test" />
        </div>
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

      <IBButton text="Open Sidebar" onClick={handleOpenMainPanel} />
      <IBDoublePanel
        headerText={'Main Header'}
        subHeaderText={'Sub Header'}
        mainPanelOpen={mainPanelOpen}
        subPanelOpen={subPanelOpen}
        mainChildren={mainChildrenContent()}
        subChildren={subChildrenContent()}
        handleDismissMainPanel={handleDismissMainPanel}
      />
    </IBBox>
  );
};
export default App;
