import { createTheme } from '@fluentui/react';

const ligthTheme = createTheme({
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
});

export type IBThemeType = keyof typeof darkTheme['palette'] &
  keyof typeof ligthTheme['palette'];

export { ligthTheme, darkTheme };
