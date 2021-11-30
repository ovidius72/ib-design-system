import { IPalette } from '@fluentui/react';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends IPalette {}
}
