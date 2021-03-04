import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode,
  Flex,
  Button,
} from '@chakra-ui/react';
import { jsx, useTheme, Global, css } from '@emotion/react';
import customTheme from '../styles/theme';

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return <>{children}</>;
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider resetCSS theme={customTheme}>
        <Flex direction="column">
          <ColorModeProvider
            options={{
              initialColorMode: 'light',
              useSystemColorMode: true,
            }}
          >
            {/* <Flex justify="center" align="center" w="100%" h="93vh"> */}
            <GlobalStyle>
              <Component {...pageProps} />
            </GlobalStyle>
            {/* </Flex> */}
          </ColorModeProvider>
          
        </Flex>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
