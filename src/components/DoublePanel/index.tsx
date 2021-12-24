/* eslint-disable */
import React, { FC } from 'react';
import { IBDoublePanelProps } from './doublepanel.types';
import { Panel, PanelType } from '@fluentui/react';

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
  handleOnRenderMainHeader,
  handleOnRenderSubHeader,
  mainPanelNavigationContent,
  subPanelNavigationContent,
}: IBDoublePanelProps) => {
  const panelStyles = {
    main: {
      boxShadow: 'none',
    },
  };
  const mainPanelStyles = {
    contentInner: {
      background: '#E4E4E4',
    },
  };
  const subPanelStyles = {
    root: {
      marginRight: mainPanelWidthNumber ? `${mainPanelWidthNumber}%` : '50%',
    },
    contentInner: {
      background: '#C2C2C2',
    },
  };

  return (
    <>
      <Panel
        id="ib-double-panel-main"
        styles={{ ...panelStyles, ...mainPanelStyles }}
        headerText={mainHeaderText}
        onRenderHeader={handleOnRenderMainHeader}
        onRenderNavigation={mainPanelNavigationContent}
        isOpen={mainPanelOpen}
        customWidth={mainPanelWidthNumber ? `${mainPanelWidthNumber}%` : '50%'}
        type={PanelType.custom}
        closeButtonAriaLabel="Close"
        onDismiss={handleDismissMainPanel}
        onOuterClick={(e: any) => e.preventDefault()}
      >
        {mainChildren}
      </Panel>

      <Panel
        id="ib-double-panel-sub"
        styles={{ ...panelStyles, ...subPanelStyles }}
        headerText={subHeaderText}
        onRenderHeader={handleOnRenderSubHeader}
        onRenderNavigation={subPanelNavigationContent}
        isOpen={subPanelOpen}
        customWidth={subPanelWidthNumber ? `${subPanelWidthNumber}%` : '100%'}
        type={PanelType.custom}
        closeButtonAriaLabel="Close"
        hasCloseButton={false}
        onOuterClick={(e: any) => e.preventDefault()}
      >
        {subChildren}
      </Panel>
    </>
  );
};

export default IBDoublePanel;
