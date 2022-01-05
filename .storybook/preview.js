import React from 'react';
import { ligthTheme } from '../src/theme/theme';
import { IBThemeProvider } from '../src/providers/ThemeProvider';

// addDecorator(withTheme(ThemeProvider, [ligthTheme]));
export const decorators = [
  Story => (
    <IBThemeProvider them={ligthTheme}>
      <Story />
    </IBThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
