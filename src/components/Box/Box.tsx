import React, { FC, HtmlHTMLAttributes } from 'react';
import styled from 'styled-components';

import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from 'styled-system';

export type IBBoxProps = HtmlHTMLAttributes<HTMLDivElement> &
  SpaceProps &
  ColorProps &
  BorderProps &
  FlexboxProps &
  LayoutProps;

const StyledBox = styled.div`
  ${layout};
  ${space};
  ${color};
  ${border};
  ${flexbox};
  min-width: 0;
  box-sizing: border-box;
`;

const IBBox: FC<IBBoxProps> = ({ children, ...rest }) => {
  return (
    <StyledBox className="ib-box" {...rest}>
      {children}
    </StyledBox>
  );
};

export { IBBox };
