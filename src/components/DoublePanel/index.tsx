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
  return (
    <>
      {/* Main Panel */}

      <Panel
        headerText={headerText}
        isOpen={isMainPanelOpen}
        customWidth={mainPanelWidthNumber ? `${mainPanelWidthNumber}%` : '50%'}
        type={PanelType.custom}
        onDismiss={() => toggleMainPanel()}
        closeButtonAriaLabel="Close"
      >
        {mainChildren}
      </Panel>

      {/* Sub Panel */}

      <Panel
        headerText={subHeaderText}
        isOpen={isSubPanelOpen}
        styles={{
          root: {
            marginRight: mainPanelWidthNumber ? `${mainPanelWidthNumber}%` : '50%',
          }
        }}
        customWidth={subPanelWidthNumber ? `${subPanelWidthNumber}%` : '100%'}
        type={PanelType.custom}
        onDismiss={() => toggleSubPanel(false)}
        // closeButtonAriaLabel="Close"
      >
        {subChildren}
      </Panel>

    </>
  );
};

export default IBDoublePanel;