import { Button } from '@chakra-ui/button';
import { FormControl } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Flex, Heading, Stack, VStack } from '@chakra-ui/layout';
import React from 'react';

const VideoItem = ({ video }) => (
  <>
    <Stack>
      <VStack w="400px" my={5}>
        <img src={video.snippet.thumbnails.medium.url} />
        <Heading fontSize="sm" fontWeight="300">
          {video.snippet.title}
        </Heading>
      </VStack>
    </Stack>
  </>
);

export default VideoItem;
