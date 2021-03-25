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
import MyNavbar from '../components/udemy/youtube/MyNavbar';

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
const MyFlex = ({ children }) => (
  <>
    <Flex
      textAlign="center"
      justifyContent="center"
      mb={40}
      flexWrap="wrap"
      alignItems="top"
      flexDirection="column"
    >
      {children}
    </Flex>
  </>
);
const SeanFlex = ({ children }) => (
  <>
    <Flex d="flex" flexDirection="column" alignItems="center">
      {children}
    </Flex>
  </>
);
class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onSearchSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: { q: term },
    });
    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    console.log('from the app!', video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <>
        <Navbar />
        <SeanFlex>
          <OtherSideHeading>Welcome to...</OtherSideHeading>
          <SideHeading>YouTube API App</SideHeading>

          <YouTubeSearch onSubmit={this.onSearchSubmit} />
          <Stack alignItems="center">
            <VideoDetail video={this.state.selectedVideo} />
            <Text align="center">Found: {this.state.videos.length} videos</Text>

            <HStack alignItems="center" justifyContent="center" flexWrap="wrap">
              <Box flex="1" />
              <Flex alignItems="center" justifyContent="center">
                <MyFlex>
                  <VideoList
                    onVideoSelect={this.onVideoSelect}
                    videos={this.state.videos}
                  />
                </MyFlex>
              </Flex>
            </HStack>
          </Stack>
        </SeanFlex>
      </>
    );
  }
}
export default App;
