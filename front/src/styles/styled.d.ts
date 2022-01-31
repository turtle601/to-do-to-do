import 'styled-components';

import { colorNumber } from '../types/type.style';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      transparent: string;
      black: string;
      white: string;

      gray: colorNumber;
      red: colorNumber;
      orange: colorNumber;
      yellow: colorNumber;
      green: colorNumber;
      teal: colorNumber;
      blue: colorNumber;
      cyan: colorNumber;
      purple: colorNumber;
      pink: colorNumber;
    };

    fonts: {
      body: string;
      heading: string;
      mono: string;
    };

    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
      '6xl': string;
      '7xl': string;
      '8xl': string;
      '9xl': string;
    };
    fontWeights: {
      hairline: number;
      thin: number;
      light: number;
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
      extrabold: number;
      black: number;
    };

    lineHeights: {
      normal: string;
      none: number;
      shorter: number;
      short: number;
      base: number;
      tall: number;
      taller: string;
      '3': string;
      '4': string;
      '5': string;
      '6': string;
      '7': string;
      '8': string;
      '9': string;
      '10': string;
    };

    letterSpacings: {
      tighter: string;
      tight: string;
      normal: string;
      wide: string;
      wider: string;
      widest: string;
    };
  }
}
