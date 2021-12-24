/* eslint-disable */
import React, { FC } from 'react';
import { IBDoublePanelProps } from './doublepanel.types';
import { Panel, PanelType } from '@fluentui/react';

const IBDoublePanel: FC<IBDoublePanelProps> = ({
  headerText,
  subHeaderText,
  isMainPanelOpen,
  isSubPanelOpen,
  mainPanelWidthNumber,
  subPanelWidthNumber,
  mainChildren,
  subChildren,
  toggleMainPanel,
  toggleSubPanel,
}: IBDoublePanelProps) => {
  
  const panelStyles = {
    main: {
      boxShadow: 'none'
    }
  }
  const subPanelStyles = {
    root: {
      marginRight: mainPanelWidthNumber
        ? `${mainPanelWidthNumber}%`
        : '50%'
    }
  }

  return (
    <>
      <Panel
        id='ib-double-panel-main'
        styles={{ ...panelStyles }}
        headerText={headerText}
        isOpen={isMainPanelOpen}
        customWidth={mainPanelWidthNumber ? `${mainPanelWidthNumber}%` : '50%'}
        type={PanelType.custom}
        onDismiss={() => toggleMainPanel()}
        closeButtonAriaLabel="Close"
      >
        {mainChildren}
      </Panel>

      <Panel
        id='ib-double-panel-sub'
        styles={{ ...panelStyles, ...subPanelStyles }}
        headerText={subHeaderText}
        isOpen={isSubPanelOpen}
        customWidth={subPanelWidthNumber ? `${subPanelWidthNumber}%` : '100%'}
        type={PanelType.custom}
        onDismiss={() => toggleSubPanel(false)}
      >
        {subChildren}
      </Panel>
    </>
  );
};

export default IBDoublePanel;
