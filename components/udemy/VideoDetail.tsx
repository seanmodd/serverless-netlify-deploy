import { Box, Flex, Heading, VStack } from '@chakra-ui/layout';

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <>
        <Flex alignItems="center" justifyContent="center" my={5}>
          <Flex
            alignItems="center"
            justifyContent="center"
            w={[300, 500, 700, 900]}
          >
            <Heading
              alignItems="center"
              justifyContent="center"
              textAlign="center"
            >
              Loading...
            </Heading>
          </Flex>
        </Flex>
      </>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <Flex alignItems="center" justifyContent="center" w={[300, 500, 700, 900]}>
      <Box justifyContent="center" textAlign="center" w={['95%', '85%', '75%']}>
        <Flex
          d="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Heading
            textColor="blue.500"
            fontSize={[20, 30, 40]}
            fontWeight="500"
            my={5}
          >
            {video.snippet.title}
          </Heading>
          <Flex
            d="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <iframe title="video player" src={videoSrc} />
          </Flex>
        </Flex>

        <Heading
          my={5}
          textAlign="left"
          textColor="blue.500"
          fontSize={[12, 15, 20]}
          fontWeight="300"
        >
          {video.snippet.description}
        </Heading>
      </Box>
    </Flex>
  );
};
export default VideoDetail;
