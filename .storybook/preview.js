import React from 'react';
import {ThemeProvider} from "@fluentui/react";
import { ligthTheme } from '../src/theme/theme';

// addDecorator(withTheme(ThemeProvider, [ligthTheme]));
export const decorators = [
  (Story) => (
    <ThemeProvider theme={ligthTheme}>
      <Story />
    </ThemeProvider>
  )
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
