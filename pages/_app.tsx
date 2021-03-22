import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode,
  Flex,
  Button,
  Spacer,
} from '@chakra-ui/react';
import { jsx, useTheme, Global, css } from '@emotion/react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useState } from 'react';
import Footer from '../components/chakraPro/FooterWithFourColumns/Footer';
import Navbar from '../components/chakraPro/NavbarWithRightCta/Navbar';
import customTheme from '../styles/theme';
import LightTheme from '../styles/light';
import DarkTheme from '../styles/dark';
import { Fonts } from '../styles/Fonts';
import GlobalStyles from '../styles/globals'
// const GlobalStyleColorMode = ({ children }) => {
//   const { colorMode } = useColorMode();

//   return <>{children}</>;
// };

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Fonts />
      <ChakraProvider 
      resetCSS
       theme={customTheme}
       >
         {/* <GlobalStyles /> */}
         {/* GlobalStyles is now included in customTheme, no need to have GlobalStyles standalone! */}
        {/* <ColorModeProvider
          options={{
            initialColorMode: 'light',
            useSystemColorMode: true,
          }}
        /> */}
          {/* <GlobalStyleColorMode /> */}
            <Component 
            // {...pageProps} 
            />
          


        <Footer />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
