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
      <Panel
        className="ib-double-panel ib-double-panel--main"
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
        className="ib-double-panel ib-double-panel--sub"
        headerText={subHeaderText}
        isOpen={isSubPanelOpen}
        styles={{
          root: {
            marginRight: mainPanelWidthNumber
              ? `${mainPanelWidthNumber}%`
              : '50%',
          },
        }}
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
