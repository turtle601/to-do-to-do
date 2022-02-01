import { DefaultTheme } from 'styled-components';

import { color } from './color';

import {
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
} from './font';

import { space } from './space';

const defaultTheme = {
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  space,
};

const lightThemeColor = {
  ...color,
  primary: '#DDF3F5',
  secondary: '#A6DCEF',
  spot: '#F2AAAA',
  danger: '#E3638',
  bgColor: color.gray[50],
  textColor: color.gray[700],
};

const darkThemeColor = {
  ...color,
  primary: '#DDF3F5',
  secondary: '#A6DCEF',
  spot: '#F2AAAA',
  danger: '#E36387',
  bgColor: color.gray[700],
  textColor: color.gray[50],
};

export const darkTheme: DefaultTheme = {
  ...defaultTheme,
  color: darkThemeColor,
};

export const lightTheme: DefaultTheme = {
  ...defaultTheme,
  color: lightThemeColor,
};
