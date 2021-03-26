import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode,
  Flex,
  Button,
  Spacer,
  Heading,
  VStack,
} from '@chakra-ui/react';
import { jsx, useTheme, Global, css } from '@emotion/react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { useColorModeValue as mode } from '@chakra-ui/color-mode';
import Footer from '../components/chakraPro/FooterWithFourColumns/Footer';
import Navbar from '../components/chakraPro/NavbarWithRightCta/Navbar';
import customTheme from '../styles/theme';
import LightTheme from '../styles/light';
import DarkTheme from '../styles/dark';
import { Fonts } from '../styles/Fonts';
import '../styles/globals.css';
import MyNavbar from '../components/udemy/youtube/MyNavbar';
import GlobalStyles from '../styles/globals';
import DcodeNavbar from '../components/udemy/youtube/dCodeNavbar';
import { MyFlex, MyFooter } from '../components/traversy/Styled';
// const GlobalStyleColorMode = ({ children }) => {
//   const { colorMode } = useColorMode();

//   return <>{children}</>;
// };
const SideFlex = ({ children }) => (
  <>
    <MyFlex
      // alignItems="center"
      pt="100px"
      textAlign="center"
      h="90vh"
      overflow="hidden"
      justifyContent="center"
      bg={mode('gray.50', 'gray.800')}
    >
      {children}
    </MyFlex>
  </>
);
const BottomFlex = ({ children }) => (
  <>
    <MyFlex
      alignItems="center"
      textAlign="center"
      h="10vh"
      justifyContent="center"
      bg={mode('gray.50', 'gray.800')}
    >
      <VStack>
        <MyFooter>Copyright &copy; 2021</MyFooter>
      </VStack>
    </MyFlex>
  </>
);

const pressedStyle = {
  width: 'auto',
  transition: 'all 0.5s ease-out',
  textShadow: '3px 3px #f2ff00',
};

const SideHeading = ({ children }) => (
  <>
    <Heading
      textShadow="3px 3px #ff00ae"
      fontSize={['40px', '50px', '60px', '70px']}
      _hover={pressedStyle}
    >
      {children}
    </Heading>
  </>
);

const OtherSideHeading = ({ children }) => (
  <>
    <Heading
      color={mode('gray.900', 'gray.50')}
      fontSize={{ base: '25px', md: '30px', lg: '35px' }}
      fontWeight="200"
    >
      {children}
    </Heading>
  </>
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Fonts />
      <ChakraProvider resetCSS theme={customTheme}>
        <Navbar />
        <SideFlex>
          <VStack spacing={15}>
            <OtherSideHeading>Welcome to...</OtherSideHeading>

            <Component {...pageProps} />
          </VStack>
        </SideFlex>
        <BottomFlex>Nice</BottomFlex>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
