/* eslint-disable */
import React, { FC } from 'react';
import { IBDoublePanelProps } from './doublepanel.types';
import { Panel, PanelType } from '@fluentui/react';
import { IBBox } from '../Box/Box';

const IBDoublePanel: FC<IBDoublePanelProps> = ({
  mainHeaderText,
  subHeaderText,
  mainPanelOpen,
  subPanelOpen,
  mainPanelWidthNumber,
  subPanelWidthNumber,
  mainChildren,
  subChildren,
  handleDismissMainPanel,
  mainPanelHeader,
  subPanelHeader,
  mainPanelNavigation,
  subPanelNavigation,
}: IBDoublePanelProps) => {
  const panelStyles = {
    main: {
      boxShadow: 'none',
    },
  };
  const mainPanelStyles = {
    contentInner: {
      background: 'rgba(0,0,0,0.05)',
    },
  };
  const subPanelStyles = {
    root: {
      marginRight: mainPanelWidthNumber ? `${mainPanelWidthNumber}%` : '50%',
    },
    contentInner: {
      // background: 'rgba(0,0,0,0.1)',
    },
  };

  const handleWrapPanelNavigation = (element: JSX.Element): any => {
    return (
      <IBBox p={2} mb={2}>
        {element}
      </IBBox>
    )
  }

  const handleWrapPanelHeader = (element: JSX.Element): any => {
    return (
      <IBBox p={2} mb={2}>
        {element}
      </IBBox>
    )
  }

  const handleWrapChildren = (element: JSX.Element): JSX.Element => {
    return (
      <IBBox p={2} mb={2}>
        {element}
      </IBBox>
    )
  }

  return (
    <>
      <Panel
        id="ib-double-panel-main"
        styles={{ ...panelStyles, ...mainPanelStyles }}
        headerText={mainHeaderText}
        onRenderHeader={() => handleWrapPanelHeader(mainPanelHeader)}
        onRenderNavigation={() => handleWrapPanelNavigation(mainPanelNavigation)}
        isOpen={mainPanelOpen}
        customWidth={mainPanelWidthNumber ? `${mainPanelWidthNumber}%` : '50%'}
        type={PanelType.custom}
        closeButtonAriaLabel="Close"
        onDismiss={handleDismissMainPanel}
        onOuterClick={(e: any) => e.preventDefault()}
      >
        {handleWrapChildren(mainChildren)}
      </Panel>

      <Panel
        id="ib-double-panel-sub"
        styles={{ ...panelStyles, ...subPanelStyles }}
        headerText={subHeaderText}
        onRenderHeader={() => handleWrapPanelHeader(subPanelHeader)}
        onRenderNavigation={() => handleWrapPanelNavigation(subPanelNavigation)}
        isOpen={mainPanelOpen && subPanelOpen}
        customWidth={subPanelWidthNumber ? `${subPanelWidthNumber}%` : '100%'}
        type={PanelType.custom}
        closeButtonAriaLabel="Close"
        hasCloseButton={false}
        onOuterClick={(e: any) => e.preventDefault()}
      >
        {subChildren && handleWrapChildren(subChildren)}
      </Panel>
    </>
  );
};

export default IBDoublePanel;
