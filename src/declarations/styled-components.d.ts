/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { IThemeType } from 'theme';

declare module 'styled-components' {
  export interface DefaultTheme extends IThemeType {}
}
