/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
import { extendTheme, theme as chakraTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { createGlobalStyle } from 'styled-components';
// import { $charcoal } from '@styles/colors';

const GlobalStyles = createGlobalStyle`
  html, body {
    
    
    
    
    
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    ${'' /* color: ${$charcoal}; */}
    background: #f6f9fc;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const fonts = {
  ...chakraTheme.fonts,
  body: 'Poppins',
  heading: 'Poppins',
};
// Poppins, Inter, Archivo, Epilogue, Bai Jamjuree, Sora
const breakpoints = createBreakpoints({
  // sm: '40em',
  // md: '52em',
  // lg: '64em',
  // lg: '62em',
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
});
const fontWeights = {
  normal: 300,
  medium: 500,
  bold: 700,
};

const fontSizes = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '28px',
  '4xl': '36px',
  '5xl': '48px',
  '6xl': '64px',
};

// const overrides = {
//   ...chakraTheme,
//   fonts,
//   fontWeights,
//   fontSizes,
//   // breakpoints,
// // };
// const myTheme = {
//   components: {
//     Button: {
//       // 1. We can update the base styles
//       baseStyle: {
//         fontWeight: 'normal',
//         boxShadow: '0 0 2px 2px #efdfde',

//         // Normally, it is "semibold"
//       },
//       // 2. We can add a new button size or extend existing
//       sizes: {
//         xl: {
//           h: '100px',
//           fontSize: 'lg',
//           px: '32px',
//         },
//       },
//       // 3. We can add a new visual variant
//       variants: {
//         'with-shadow': {
//           bg: 'blue.400',
//           boxShadow: '0 0 2px 2px #efdfde',
//         },
//         // 4. We can override existing variants
//         solid: (props) => ({
//           bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
//         }),
//       },
//     },
//   },
// };

// const overrides = {
//   styles: {
//     global: {
//       // styles for the `body`
//       body: {
//         bg: 'red.500',
//         color: 'red.500',
//       },
//       // styles for the `a`
//       a: {
//         color: 'red.500',
//         _hover: {
//           textDecoration: 'underline',
//         },
//       },
//     },
//   },
// };

const customTheme = extendTheme({
  fonts,
  fontWeights,
  breakpoints,
  fontSizes,
  GlobalStyles,
  // overrides,
  // myTheme,
});

export default customTheme;
