import '@fluentui/react';
import { IPalette } from '@fluentui/react';
import 'styled-components';

interface ICustomColors {
  primaryButtonBackgroungGradiend: string;
  primaryButtonBackgroungGradiendHovered: string;
  primaryButtonBackgroungGradiendDisabled: string;
  primaryButtonBackgroungGradiendPressed: string;
  primaryButtonBackgroungGradiendFocuses: string;
  primaryButtonColor: string;

  secondaryButtonBackgroungGradiend: string;
  secondaryButtonColor: string;

  textButtonBackgroungGradiend: string;
  textButtonColor: string;

  actionButtonBackgroungGradiend: string;
  actionButtonColor: string;
}

interface MyPalette extends IPalette, ICustomColors {}

interface MyTheme {
  palette: MyPalette & IPalette & ICustomColors;
}

declare module '@fluentui/react' {
  export interface IPalette extends ICustomColors {}
  export interface Theme extends MyTheme {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends MyTheme {}
}
