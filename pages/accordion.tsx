import { Box, Flex, Heading, HStack, Spacer, Stack } from '@chakra-ui/layout';
import React from 'react';
import { useColorModeValue as mode } from '@chakra-ui/color-mode';
import { Alert } from 'reactstrap';
import { Text } from '@chakra-ui/react';
import Navbar from '../components/chakraPro/NavbarWithRightCta/Navbar';
import VideoList from '../components/udemy/VideoList';
import YouTubeSearch from '../components/udemy/YouTubeSearch';
import youtube from '../components/api/youtube';
import VideoDetail from '../components/udemy/VideoDetail';
import Accordion from '../components/udemy/Accordion';

const pressedStyle = {
  width: 'auto',
  transition: 'all 0.5s ease-out',
  textShadow: '3px 3px #f2ff00',
};

const OtherSideHeading = ({ children }) => (
  <>
    <Heading
      color={mode('gray.900', 'gray.50')}
      fontSize={{ base: '25px', md: '30px', lg: '35px' }}
      fontWeight="200"
      mt={125}
    >
      {children}
    </Heading>
  </>
);

const SideHeading = ({ children }) => (
  <>
    <Heading
      alignItems="center"
      textAlign="center"
      justifyContent="center"
      textShadow="3px 3px #ff00ae"
      my={10}
      fontSize={['40px', '50px', '60px', '70px']}
      _hover={pressedStyle}
    >
      {children}
    </Heading>
  </>
);

const SeanFlex = ({ children }) => (
  <>
    <Flex py={10} d="flex" flexDirection="column" alignItems="center">
      {children}
    </Flex>
  </>
);

const items = [
  {
    title: 'What is React?',
    content: 'React is a front-end javascript framework',
  },
  {
    title: 'What is Angular?',
    content: 'Angular is a front-end javascript framework',
  },
  {
    title: 'What is Vue?',
    content: 'Vue is a front-end javascript framework',
  },
];
class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />

        <SeanFlex>
          <OtherSideHeading>Welcome to...</OtherSideHeading>
          <SideHeading>The Accordion App</SideHeading>
          <Accordion items={items} />
        </SeanFlex>
      </>
    );
  }
}
export default App;
