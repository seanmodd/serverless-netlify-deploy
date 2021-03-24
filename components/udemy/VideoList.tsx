import { Button } from '@chakra-ui/button';
import { FormControl } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Flex, Heading, Stack, VStack } from '@chakra-ui/layout';
import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => (
    <VideoItem onVideoSelect={onVideoSelect} key={video.id} video={video} />
  ));
  return (
    <>
      
      <Flex justifyContent="center" d="flex" flexDirection="column" alignItems="center" my={5}>
        <Stack>
          <VStack w="200px" my={5}>
            {renderedList}
          </VStack>
        </Stack>
      </Flex>
    </>
  );
};

export default VideoList;
