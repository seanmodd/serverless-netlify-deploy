/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
import { extendTheme, theme as chakraTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { Fonts } from './Fonts';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};
const fonts = {
  ...chakraTheme.fonts,
  heading: 'Poppins',
  body: 'Poppins',
};

const overrides = {
  ...chakraTheme,
  fonts,
  colors,
};
const customTheme = extendTheme({ overrides });
export default customTheme;
