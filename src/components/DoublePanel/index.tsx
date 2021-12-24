/* eslint-disable */
import React, { FC } from 'react';
import { IBDoublePanelProps } from './doublepanel.types';
import { Panel, PanelType } from '@fluentui/react';

const IBDoublePanel: FC<IBDoublePanelProps> = ({
  headerText,
  subHeaderText,
  mainPanelOpen,
  subPanelOpen,
  mainPanelWidthNumber,
  subPanelWidthNumber,
  mainChildren,
  subChildren,
  handleDismissMainPanel,
}: IBDoublePanelProps) => {
  
  const panelStyles = {
    main: {
      boxShadow: 'none'
    },
  }
  const mainPanelStyles = {
    contentInner: {
      background: '#E4E4E4'
    }
  }
  const subPanelStyles = {
    root: {
      marginRight: mainPanelWidthNumber
        ? `${mainPanelWidthNumber}%`
        : '50%'
    },
    contentInner: {
      background: '#C2C2C2'
    }
  }

  return (
    <>
      <Panel
        id='ib-double-panel-main'
        styles={{ ...panelStyles, ...mainPanelStyles }}
        headerText={headerText}
        isOpen={mainPanelOpen}
        customWidth={mainPanelWidthNumber ? `${mainPanelWidthNumber}%` : '50%'}
        type={PanelType.custom}
        closeButtonAriaLabel="Close"
        onDismiss={handleDismissMainPanel}
      >
        {mainChildren}
      </Panel>

      <Panel
        id='ib-double-panel-sub'
        styles={{ ...panelStyles, ...subPanelStyles }}
        headerText={subHeaderText}
        isOpen={subPanelOpen}
        customWidth={subPanelWidthNumber ? `${subPanelWidthNumber}%` : '100%'}
        type={PanelType.custom}
        closeButtonAriaLabel="Close"
        hasCloseButton={false}
      >
        {subChildren}
      </Panel>
    </>
  );
};

export default IBDoublePanel;
