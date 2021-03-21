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
