import { useState, useEffect } from 'react';
import { useColorModeValue as mode } from '@chakra-ui/color-mode';
import { Flex, Heading, Spacer, VStack } from '@chakra-ui/layout';
import { css, jsx } from '@emotion/react';
import { AddIcon } from '@chakra-ui/icons';
import { isTargetLikeServerless } from 'next/dist/next-server/server/config';
import Tasks from '../components/traversy/Tasks';
import FormButton from '../components/traversy/FormButton';
import Navbar from '../components/chakraPro/NavbarWithRightCta/Navbar';
import { MyFlex } from '../components/traversy/Styled';
import AddTask from '../components/traversy/AddTask';
import MyNavbar from '../components/udemy/youtube/MyNavbar';

const pressedStyle = {
  width: 'auto',
  transition: 'all 0.5s ease-out',
  textShadow: '3px 3px #f2ff00',
};

const SideHeading = ({ children }) => (
  <>
    <Heading
      textAlign="center"
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

//! below is where the function starts

function App() {
  // The Actual Components:

  return (
    <>
      <SideHeading>The Sean Modd Portfolio App</SideHeading>
      <OtherSideHeading> of amazing apps</OtherSideHeading>
    </>
  );
}

export default App;
