import React, { FC, useMemo, useContext } from 'react';
import { DefaultButton, IButtonProps, useTheme } from '@fluentui/react';
import { ButtonInner } from './ButtonInner';
import { IBThemeContext } from '../../../Providers/ThemeProvider';
import styled from 'styled-components';

type StyledButtonProps = {
  // primary button style
  primaryButtonTextColor: string;
  primaryButtonBorder: string;
  primaryBackground: string;
  primaryBackgroundHover: string;
  primaryButtonBackgroundPressed: string;
  // secondary button style
  buttonTextColor: string;
  buttonBorder: string;
  background: string;
  backgroundHover: string;
  buttonBackgroundPressed: string;
};

const IBPrimaryButton = styled(DefaultButton)<StyledButtonProps>`
  background: ${({ primaryBackground }) => primaryBackground};
  color: ${({ primaryButtonTextColor }) => primaryButtonTextColor};
  padding: 6px 20px;
  border-radius: 2px;
  border: none;
  &:hover {
    background: ${({ primaryBackgroundHover }) => primaryBackgroundHover};
    color: ${({ primaryButtonTextColor }) => primaryButtonTextColor};
  }
  &:active {
    background: ${({ primaryButtonBackgroundPressed }) =>
      primaryButtonBackgroundPressed};
    color: ${({ primaryButtonTextColor }) => primaryButtonTextColor};
  }
`;

const IBSecondaryButton = styled(DefaultButton)<StyledButtonProps>`
  background: ${({ background }) => background};
  color: ${({ buttonTextColor }) => buttonTextColor};
  padding: 6px 20px;
  border-radius: 2px;
  border: ${({ buttonBorder }) => buttonBorder};
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
  variant?: 'primary' | 'secondary';
  /** fill the available space */
  fluid?: boolean;
  /** is disabled */
  disabled?: boolean;
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
    switch (variant) {
      case 'primary':
        return IBPrimaryButton as any;

      case 'secondary':
        return IBSecondaryButton as any;

      default:
        return IBSecondaryButton as any;
    }
  }, [variant]);

  const buttonInner = useMemo(() => {
    return <ButtonInner text={text} loading={loading} />;
  }, [text, loading]);

  return (
    <ButtonType
      {...rest}
      // primary
      primaryButtonTextColor={palette.white}
      primaryButtonBorde={semanticColors.primaryButtonBorder}
      primaryBackground={semanticColors.primaryButtonBackground}
      primaryBackgroundHover={semanticColors.primaryButtonBackgroundHovered}
      primaryBackgroundPressed={semanticColors.primaryButtonBackgroundPressed}
      // default
      buttonTextColor={palette.black}
      buttonBorder={semanticColors.buttonBorder}
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
