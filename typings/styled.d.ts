import { IPalette } from '@fluentui/react';
import 'styled-components';

declare module 'styled-components' {
  export interface IBTheme extends IPalette {}
}
