import '@fluentui/react';
import { IPalette } from '@fluentui/react';
import 'styled-components';

interface ICusotmColors {
  backgroundGradiendPrimary1: string;
  backgroundGradiendPrimary2: string;
  backgroundGradiendPrimary3: string;
  backgroundPrimaryColor: string;
  backgroundGradiendSecondary1: string;
  backgroundGradiendSecondary2: string;
  backgroundGradiendSecondary3: string;
  backgroundSecondaryColor: string;
  backgroundGradiendTertiary1: string;
  backgroundGradiendTertiary2: string;
  backgroundGradiendTertiary3: string;
  backgroundTertiaryColor: string;
}

interface MyPalette extends IPalette, ICusotmColors {
  thisColor: string;
}

interface MyTheme {
  palette: MyPalette & IPalette & ICusotmColors;
}

declare module '@fluentui/react' {
  export interface IPalette extends ICusotmColors {
    thisColor: string;
  }
  export interface Theme extends MyTheme {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends MyTheme {}
}
