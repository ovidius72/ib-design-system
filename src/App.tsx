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
    setMainPanelOpen(false);
    setSubPanelOpen(false);
    return;
  };

  const handleOpenMainPanel = () => !mainPanelOpen && setMainPanelOpen(true);

  const handleOpenSubPanel = () => !subPanelOpen && setSubPanelOpen(true);

  const mainPanelHeaderContent = () => {
    return (
      <IBBox mb={4}>
        <h3>Header of Main Panel</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum neque
          accusantium reprehenderit deserunt facere amet sint? Corporis impedit,
          iste recusandae, sed nisi quam et reiciendis ab ex nihil, distinctio
          aut.
        </p>
      </IBBox>
    );
  };

  const subPanelHeaderContent = () => {
    return (
      <IBBox mb={4}>
        <h3>Header of Sub Panel</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum neque
          accusantium reprehenderit deserunt facere amet sint? Corporis impedit,
          iste recusandae, sed nisi quam et reiciendis ab ex nihil, distinctio
          aut.
        </p>
      </IBBox>
    );
  };

  const mainPanelNavigationContent = () => {
    return (
      <IBBox mb={4}>
        <ul style={{ display: 'flex', listStyle: 'none', height: '50px' }}>
          <li
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              cursor: 'pointer',
            }}
            onClick={handleOpenSubPanel}
          >
            ACTION 2
          </li>
          <li
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              cursor: 'pointer',
            }}
            onClick={handleOpenSubPanel}
          >
            ACTION 1
          </li>
          <li
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'red',
              color: 'white',
              cursor: 'pointer',
            }}
            onClick={handleDismissMainPanel}
          >
            CLOSE
          </li>
        </ul>
      </IBBox>
    );
  };

  const subPanelNavigationContent = () => {
    return (
      <IBBox mb={4}>
        Dummy navigation
      </IBBox>
    );
  };

  const mainChildrenContent = () => {
    return (
      <IBBox mb={4}>
        <div
          style={{
            border: '2px solid red',
            background: '#C2C2C2',
            cursor: 'pointer',
          }}
          onClick={handleOpenSubPanel}
        >
          <h3>Children of Main Panel</h3>
          <p>Click anywhere in the article to open sub panel.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illo
            dolorem quam aliquid dolore sequi unde praesentium, quo est. Dicta
            exercitationem hic voluptate ratione quae, suscipit beatae saepe ut
            necessitatibus.
          </p>
          <img src="https://picsum.photos/1000/200" alt="test" />
        </div>
      </IBBox>
    );
  };

  const subChildrenContent = () => {
    return (
      <div>
        <div>
          <h3>List of cards</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', listStyle: 'none' }}>
          <li
            style={{
              display: 'flex',
              alignItems: 'center',
              flex: 1,
              cursor: 'pointer',
              height: '100px'
            }}
          >
            ACTION 1
          </li>
          <li
            style={{
              display: 'flex',
              alignItems: 'center',
              flex: 1,
              cursor: 'pointer',
              height: '100px'
            }}
          >
            ACTION 2
          </li>
          <li
            style={{
              display: 'flex',
              alignItems: 'center',
              flex: 1,
              cursor: 'pointer',
              height: '100px'
            }}
          >
            ACTION 3
          </li>
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

      <IBBox mb={4}>
        Component: <strong>DoublePanel</strong>
      </IBBox>

      <IBButton text="Open main panel" onClick={handleOpenMainPanel} />
      <IBDoublePanel
        mainHeaderText={'Main Header'}
        subHeaderText={'Sub Header'}
        mainPanelOpen={mainPanelOpen}
        subPanelOpen={subPanelOpen}
        mainChildren={mainChildrenContent()}
        subChildren={subChildrenContent()}
        handleDismissMainPanel={handleDismissMainPanel}
        handleOnRenderMainHeader={mainPanelHeaderContent}
        handleOnRenderSubHeader={subPanelHeaderContent}
        mainPanelNavigationContent={mainPanelNavigationContent}
        subPanelNavigationContent={subPanelNavigationContent}
      />
    </IBBox>
  );
};
export default App;
