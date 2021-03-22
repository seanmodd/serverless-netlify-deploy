import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode,
  Flex,
  Button,
  Spacer,
} from '@chakra-ui/react';
import { jsx, useTheme, Global, css } from '@emotion/react';
import Footer from '../components/chakraPro/FooterWithFourColumns/Footer';
import Navbar from '../components/chakraPro/NavbarWithRightCta/Navbar';
import customTheme from '../styles/theme';
import '../styles/globals.scss';
import LightTheme from '../styles/light';
import DarkTheme from '../styles/dark';
import { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import GoogleFonts from 'next-google-fonts'
const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return <>{children}</>;
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider resetCSS theme={customTheme}>
        <ColorModeProvider
          options={{
            initialColorMode: 'light',
            useSystemColorMode: true,
          }}
        >
          
          <GlobalStyle>
            <Component {...pageProps} />
          </GlobalStyle>
        </ColorModeProvider>

        <Footer />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
