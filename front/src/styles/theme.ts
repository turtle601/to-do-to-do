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
  primary: '#22b8cf',
  secondary: '#324B50',
  third: '#95B0B6',
  bgColor: color.gray[50],
  textColor: color.gray[700],
};

const darkThemeColor = {
  ...color,
  primary: '#22b8cf',
  secondary: '#324B50',
  third: '#95B0B6',
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
