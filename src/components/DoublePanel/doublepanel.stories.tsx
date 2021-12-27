import React from 'react';
import { Meta, Story } from '@storybook/react';
import IBDoublePanel from './';
import { IBDoublePanelProps } from './doublepanel.types';
import { IBButton } from '../Button/Button';

export default {
  title: 'Atoms/IBDoublePanel',
  component: IBDoublePanel,
  argTypes: {},
} as Meta<IBDoublePanelProps>;

const Template: Story<IBDoublePanelProps> = args => <IBDoublePanel {...args} />;

export const DefaultDoublePanel: Story<IBDoublePanelProps> = Template.bind({});

const TestComponent = ({
  title,
  description,
  linkList = [],
}: {
  title: string;
  description?: string;
  linkList?: { id: number; name: string }[];
}) => {
  return (
    <>
      <h3>* {title}</h3>
      {description && <p>{description}</p>}
      {linkList?.length > 0 && (
        <div style={{ display: 'flex' }}>
          {linkList.map(({ id, name }: any) => {
            return (
              <div style={{ flex: 1 }} key={id}>
                <IBButton text={name} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

DefaultDoublePanel.args = {
  mainHeaderText: 'Main Header',
  subHeaderText: 'Sub Header',
  mainPanelOpen: false,
  subPanelOpen: false,
  mainChildren: TestComponent({
    title: 'mainChildren',
    description: 'INFO: * = component',
  }),
  subChildren: TestComponent({
    title: 'subChildren',
    linkList: [
      { id: 0, name: 'home' },
      { id: 1, name: 'about' },
      { id: 2, name: 'close' },
    ],
  }),
  handleDismissMainPanel: () => null,
  mainPanelHeader: TestComponent({
    title: 'mainPanelHeader',
    description: '[OPTIONAL] This is the space for the header',
  }),
  subPanelHeader: TestComponent({ title: 'subPanelHeader' }),
  mainPanelNavigation: TestComponent({
    title: 'mainPanelNavigation',
    description: '[OPTIONAL] This is the space for the navigation',
    linkList: [
      { id: 0, name: 'home' },
      { id: 1, name: 'about' },
      { id: 2, name: 'close' },
    ],
  }),
  subPanelNavigation: () => 'You can have a navigation here.',
};
