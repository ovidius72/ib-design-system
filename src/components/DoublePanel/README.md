# ⚡️ Get Started

This is an example of a parent component that holds the logic for the callback props

<br />

```tsx
import React, { useState } from 'react';
import { IBBox } from './components/Box/Box';
import { IBButton } from './components/Button/Button';
import IBDoublePanel from './components/DoublePanel';

export const SomePageComponent = (props) => {

  /* 
    TODO: make your own hook
  */

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

  const mainPanelHeaderContent = () => <MainPanelHeader { ...props } /> 

  const subPanelHeaderContent = () => <SubPanelHeader { ...props } /> 

  const mainPanelNavigationContent = () => <MainPanelNav { ...props } /> 

  const subPanelNavigationContent = () => <SubPanelNav { ...props } /> 

  const mainChildrenContent = () => <DummyComponent { ...props } /> 

  const subChildrenContent = () => <DummyComponent { ...props } /> 

  return (
    <IBBox p={2}>
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
```