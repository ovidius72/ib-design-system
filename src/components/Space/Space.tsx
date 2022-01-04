import { Alignment } from '@fluentui/react';
import React, { FC } from 'react';
import { IBSizeType } from 'src/theme/type';
import styled from 'styled-components';

export type IBSpaceProps = {
  vertical?: boolean;
  size?: IBSizeType | number;
  hAlign?: Alignment;
  vAlign?: Alignment;
  fluid?: boolean;
  style?: React.CSSProperties;
};

const SpaceContainer = styled.div<IBSpaceProps & { gap: number }>`
  display: ${p => (p.fluid ? 'flex' : 'inline-flex')};
  flex-direction: ${p => (p.vertical ? 'column' : 'row')};
  justify-content: ${p => (p.vertical ? p.vAlign : p.hAlign)};
  align-items: ${p => (p.vertical ? p.hAlign : p.vAlign)};
  gap: ${p => `${p.gap}px`};
`;

const gapSize = {
  small: 2,
  medium: 6,
  large: 12,
  xLarge: 18,
  default: 0,
};
const IBSpace: FC<IBSpaceProps> = ({
  size,
  children,
  fluid = false,
  hAlign: align = 'start',
  vAlign: justify = 'start',
  vertical = false,
  style,
}) => {
  const sizeIsNumber = typeof size === 'number';
  const gap = sizeIsNumber ? size : gapSize[size || 'default'];

  const items = React.Children.toArray(children).map(c => {
    return c;
  });

  return (
    <SpaceContainer
      className="ib-space"
      gap={gap}
      hAlign={align}
      vAlign={justify}
      vertical={vertical}
      style={style}
      fluid={fluid}
    >
      {items}
    </SpaceContainer>
  );
};

export { IBSpace };
