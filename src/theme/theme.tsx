import { createTheme } from '@fluentui/react';

const ligthTheme = createTheme({
  palette: {
    // themePrimary:
    //   'linear-gradient(113.96deg, #9B3CFF 0%, #585CFF 48.96%, #51BEA4 100%)',
    themePrimary: 'dodgerblue', // must be solid
    themeLighterAlt: '#F1F3FF',
    themeLighter: '#B3BCFF',
    themeLight: '#8595FE',
    themeTertiary: '#1933DE',
    themeDarkAlt: '#152DCE',
    themeDark: '#1026B9',
    themeDarker: '#0D21A5',
    neutralLighterAlt: '#faf9f8',
    neutralLighter: '#f3f2f1',
    neutralLight: '#edebe9',
    neutralQuaternaryAlt: '#e1dfdd',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c6c4',
    neutralTertiary: '#a19f9d',
    neutralSecondary: '#605e5c',
    neutralPrimaryAlt: '#3b3a39',
    neutralPrimary: '#323130',
    neutralDark: '#201f1e',
    black: '#000000',
    white: '#ffffff',
  },
  semanticColors: {
    buttonBackground:
      'linear-gradient(113.96deg, #ff33fc 0%, #ff5456 48.44%, #ffae33 100% )',
    buttonBackgroundHovered:
      'linear-gradient(113.96deg, #ff8367 0%, #ff67fe 100%)',
    buttonBackgroundPressed: '#FF9B00',
    infoIcon: '#00baff',
    infoBackground: '#9ffaff',
    warningBackground: '#FFF4cf',
    warningIcon: '#797775',
    errorIcon: '#d83b01',
    errorBackground: '#ffd9cc',
    successBackground: '#dff6dd',
    successIcon: '#107c10',
  },
});

const darkTheme = createTheme({
  palette: {
    themePrimary: '#d46520',
    themeLighterAlt: '#fdf8f5',
    themeLighter: '#f8e3d6',
    themeLight: '#f2ccb4',
    themeTertiary: '#e59d70',
    themeSecondary: '#d97537',
    themeDarkAlt: '#be5b1d',
    themeDark: '#a14d18',
    themeDarker: '#773812',
    neutralLighterAlt: '#373737',
    neutralLighter: '#3f3f3f',
    neutralLight: '#4c4c4c',
    neutralQuaternaryAlt: '#545454',
    neutralQuaternary: '#5b5b5b',
    neutralTertiaryAlt: '#777777',
    neutralTertiary: '#f8f8f8',
    neutralSecondary: '#f9f9f9',
    neutralPrimaryAlt: '#fafafa',
    neutralPrimary: '#f5f5f5',
    neutralDark: '#fdfdfd',
    black: '#fefefe',
    white: '#2e2e2e',
  },
  semanticColors: {
    buttonBackground:
      'linear-gradient(113.96deg, #ff33fc 0%, #ff5456 48.44%, #ffae33 100% )',
    infoIcon: '#00baff',
    infoBackground: '#9ffaff',
    warningBackground: '#FFF4cf',
    warningIcon: '#797775',
    errorIcon: '#d83b01',
    errorBackground: '#ffd9cc',
    successBackground: '#dff6dd',
    successIcon: '#107c10',
  },
});

export type IBThemeType = keyof typeof darkTheme['palette'] &
  keyof typeof ligthTheme['palette'];

export { ligthTheme, darkTheme };
