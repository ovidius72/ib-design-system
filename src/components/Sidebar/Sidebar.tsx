import { IconButton, Stack } from '@fluentui/react';
import { IPanelProps, Panel, PanelType } from '@fluentui/react/lib/Panel';
import React, { FC, useEffect, useRef, useState } from 'react';
import { IBSpace } from '../Space/Space';

export type IBSidebarProps = {
  size?: 'small' | 'medium' | 'large' | 'xLarge';
  onClose?: () => void;
  subPanel: {
    subPanelContent?: React.ReactNode;
    onClose?: () => void;
    size?: 'small' | 'medium' | 'large' | 'xLarge';
  } & IPanelProps;
} & IPanelProps;

const IBSidebar: FC<IBSidebarProps> = ({
  subPanel,
  children,
  isOpen,
  ...panelProps
}) => {
  const { subPanelContent, ...subPanelProps } = subPanel;
  // const mainPanelRef = useRef<PanelBase | null>(null);
  // const [mainOpen, setMainOpen] = useState(isOpen);
  // const [subOpen, setSubOpen] = useState(isSubOpen);
  const [mainWidth, setMainWidth] = useState(0);
  const [panelSize, setPanelSize] = useState<PanelType | undefined>(
    panelProps.type,
  );
  const originalSize = useRef(panelSize);

  useEffect(() => {
    originalSize.current = panelProps.type;
    setPanelSize(panelProps.type);
  }, [panelProps.type]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        const mainPanelElement = document.querySelector<HTMLDivElement>(
          '#ib-main-panel .ms-Panel-main',
        );
        if (mainPanelElement) {
          console.log('mainPanelElement', mainPanelElement);
          const mw = mainPanelElement.offsetWidth;
          setMainWidth(mw);
        }
      }, 100);
    }
  }, [isOpen]);

  const toggleSize = () => {
    if (originalSize.current === panelSize) {
      setPanelSize(PanelType.smallFluid);
    } else {
      setPanelSize(originalSize.current);
    }
  };

  return (
    <React.Fragment>
      <Panel // SUB PANEL
        isOpen={subPanelProps.isOpen}
        style={{ marginRight: mainWidth }}
        hasCloseButton={false}
        isBlocking
        {...subPanelProps}
        className="ib-sub-panel"
        onRenderHeader={p => {
          return (
            <Stack
              horizontal
              horizontalAlign="space-between"
              tokens={{ childrenGap: 4, padding: '6px 12px 18px 12px' }}
            >
              <Stack.Item>{(p && p.headerText) || ''}</Stack.Item>
              <Stack.Item>
                <IconButton
                  iconProps={{ iconName: 'ChromeClose' }}
                  onClick={subPanelProps.onClose}
                />
              </Stack.Item>
            </Stack>
          );
        }}
      >
        {subPanelContent}
      </Panel>
      <Panel // MAIN PANEL
        isOpen={isOpen}
        hasCloseButton={false}
        headerText="Ciao Header"
        onRenderHeader={p => {
          return (
            <Stack
              horizontal
              horizontalAlign="space-between"
              verticalAlign="center"
              // TODO: Use theme spacing settings instead of hardcoded padding and gap values. (TO BE IMPLEMENTED)
              tokens={{ childrenGap: 4, padding: '0px 24px 8px 24px' }}
            >
              <Stack.Item>
                <h3>{p && p.headerText}</h3>
              </Stack.Item>
              <Stack.Item>
                <IBSpace size="xLarge">
                  <IconButton
                    iconProps={{ iconName: 'ChromeClose' }}
                    onClick={panelProps.onClose}
                  />
                  <IconButton
                    iconProps={{ iconName: 'ArrowTallDownLeftIcon' }}
                    onClick={toggleSize}
                  />
                </IBSpace>
              </Stack.Item>
            </Stack>
          );
        }}
        {...panelProps}
        isBlocking
        id="ib-main-panel"
        type={panelSize}
      >
        {children}
      </Panel>
    </React.Fragment>
  );
};

export { IBSidebar };
