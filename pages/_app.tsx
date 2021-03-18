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
        <Navbar />

        <Flex direction="column">
          <ColorModeProvider
            options={{
              initialColorMode: 'light',
              useSystemColorMode: true,
            }}
          >
            <Flex justify="center" align="center" w="100%" h="auto" mt="70">
              <GlobalStyle>
                <Component {...pageProps} />
              </GlobalStyle>
            </Flex>
          </ColorModeProvider>
        </Flex>
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
