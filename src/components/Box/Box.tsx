import React, { FC, HtmlHTMLAttributes } from 'react';
import styled from 'styled-components';
import {
  ColorProps,
  layout,
  LayoutProps,
  space,
  color,
  border,
  BorderProps,
  SpaceProps,
} from 'styled-system';

export type IBBoxProps = HtmlHTMLAttributes<HTMLDivElement> &
  SpaceProps &
  ColorProps &
  BorderProps &
  LayoutProps;

const StyledBox = styled.div`
  ${layout};
  ${space};
  ${color};
  ${border};
  box-sizing: border-box;
`;

const IBBox: FC<IBBoxProps> = ({ children, ...rest }) => {
  return <StyledBox {...rest}>{children}</StyledBox>;
};

export { IBBox };
