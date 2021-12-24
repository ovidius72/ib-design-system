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
      <div style={{ background: '#999', color: 'white', padding: '5px' }}>
        <h3>Header of Main Panel: *OPTIONAL*</h3>
        <p>
          This space is utilized by Main Panel thanks to the native property:{' '}
          <strong>onRenderHeader</strong>
        </p>
        <ul>
          <li>
            GBV: <strong>€ 12,800.00</strong>
          </li>
          <li>
            Rapporto: <strong>R_0000000118596</strong>
          </li>

          <li>
            Altri importi: <strong>€ 6,000.00</strong>
          </li>
        </ul>
      </div>
    );
  };

  const subPanelHeaderContent = () => {
    return (
      <>
        <h3>Header of Sub Panel</h3>
        <p>
          This space is utilized by Main Panel thanks to the native property:{' '}
          <strong>onRenderHeader</strong>
        </p>
      </>
    );
  };

  const mainPanelNavigationContent = () => {
    return (
      <div style={{ background: '#777', color: 'white' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <div style={{ flexBasis: '400px' }}>
              <p>
                Navigation of Sub Panel: <strong>*OPTIONAL*</strong>
              </p>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexBasis: '300px',
            }}
          >
            <div style={{ flex: 1 }}>
              <IBButton text="Open Sub Panel" onClick={handleOpenSubPanel} />
            </div>

            <div style={{ flex: 1 }}>
              <IBButton
                variant="primary"
                text="Close Main Panel"
                onClick={handleDismissMainPanel}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const subPanelNavigationContent = () => {
    return 'You can have a navigation here.';
  };

  const mainChildrenContent = () => {
    return (
      <>
        <h2>This is the CHILDREN prop of main Panel</h2>
        <h3>Select one object to see the property on the sub panel</h3>
        <ul>
          <li style={{ fontSize: '2.5rem', cursor: 'pointer' }}>cat</li>
          <li style={{ fontSize: '2.5rem', cursor: 'pointer' }}>dog</li>
        </ul>
      </>
    );
  };

  const subChildrenContent = () => {
    return (
      <div>
        <div>
          <h3>List of cards</h3>
          <ul
            style={{
              display: 'flex',
              flexDirection: 'column',
              listStyle: 'none',
            }}
          >
            <li
              style={{
                display: 'flex',
                alignItems: 'center',
                flex: 1,
                cursor: 'pointer',
                height: '100px',
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
                height: '100px',
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
                height: '100px',
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
        mainPanelHeader={mainPanelHeaderContent()}
        subPanelHeader={subPanelHeaderContent()}
        mainPanelNavigation={mainPanelNavigationContent()}
        subPanelNavigation={subPanelNavigationContent()}
      />
    </IBBox>
  );
};
export default App;
