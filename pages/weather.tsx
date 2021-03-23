import { useState, useRef, useEffect } from 'react';
import { useColorModeValue as mode } from '@chakra-ui/color-mode';
import { Flex, Heading, Spacer, VStack } from '@chakra-ui/layout';
import { css, jsx } from '@emotion/react';
import { AddIcon } from '@chakra-ui/icons';
import { isTargetLikeServerless } from 'next/dist/next-server/server/config';
import ReactDOM from 'react-dom';
import Tasks from '../components/traversy/Tasks';
import FormButton from '../components/traversy/FormButton';
import Navbar from '../components/chakraPro/NavbarWithRightCta/Navbar';
import { MyFlex } from '../components/traversy/Styled';
import AddTask from '../components/traversy/AddTask';
import SeasonDisplay from '../components/udemy/SeasonDisplay';

const SideFlex = ({ children }) => (
  <>
    <MyFlex
      alignItems="center"
      textAlign="center"
      justifyContent="center"
      bg={mode('gray.50', 'gray.800')}
      pb="50px"
    >
      {children}
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
      alignItems="center"
      textAlign="center"
      justifyContent="center"
      mb={10}
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
      mt="100px"
    >
      {children}
    </Heading>
  </>
);

const OtherThing = () => (
  <>
    {window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    )}
  </>
);

//! below is where the function starts

function App() {
  const ref = useRef();

  useEffect(() => {
    ReactDOM.render(<OtherThing />, ref.current);
  }, []);

  // The Actual Components:

  return (
    <>
      <Navbar />
      <SideFlex>
        <VStack>
          <OtherSideHeading>Welcome to...</OtherSideHeading>
          <SideHeading>The Weather App</SideHeading>

          <SeasonDisplay />
          <div ref={ref} />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <footer>Copyright &copy; 2021</footer>
        </VStack>
      </SideFlex>
    </>
  );
}

export default App;
