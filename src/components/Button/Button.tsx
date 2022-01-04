import React, { FC, useMemo, useContext } from 'react';
import {
  DefaultButton,
  IButtonProps,
  PrimaryButton,
  useTheme,
} from '@fluentui/react';
import { ButtonInner } from './ButtonInner';
import { IBThemeContext } from '../../../Providers/ThemeProvider';
import styled from 'styled-components';

type StyledButtonProps = {
  buttonTextColor: string;
  background: string;
  backgroundHover: string;
  buttonBackgroundPressed: string;
};

const StyledButton = styled(DefaultButton)<StyledButtonProps>`
  background: ${({ background }) => background};
  color: ${({ buttonTextColor }) => buttonTextColor};
  padding: 6px 20px;
  border-radius: 2px;
  border: none;
  &:hover {
    background: ${({ backgroundHover }) => backgroundHover};
    color: ${({ buttonTextColor }) => buttonTextColor};
  }
  &:active {
    background: ${({ buttonBackgroundPressed }) => buttonBackgroundPressed};
    color: ${({ buttonTextColor }) => buttonTextColor};
  }
`;

export type IBButtonProps = {
  /** Show the loading spinner. */
  loading?: boolean;
  /** The text. */
  text: string;
  /** Variant type. */
  variant?: 'primary' | 'default';
  /** fill the available space */
  fluid?: boolean;
} & IButtonProps;

const IBButton: FC<IBButtonProps> = props => {
  const {
    loading = false,
    variant = 'default',
    text,
    fluid = false,
    ...rest
  } = props;

  const { themeName } = useContext(IBThemeContext);
  const { palette, semanticColors } = useTheme();

  console.log(themeName);

  const ButtonType = useMemo(() => {
    return variant === 'default' ? (StyledButton as any) : PrimaryButton;
  }, [variant]);

  const buttonInner = useMemo(() => {
    return <ButtonInner text={text} loading={loading} />;
  }, [text, loading]);

  return (
    <ButtonType
      {...rest}
      buttonTextColor={palette.white}
      background={semanticColors.buttonBackground}
      backgroundHover={semanticColors.buttonBackgroundHovered}
      buttonBackgroundPressed={semanticColors.buttonBackgroundPressed}
      style={{ width: fluid ? '100%' : 'unset' }}
    >
      {buttonInner}
    </ButtonType>
  );
};

export { IBButton };
