import { Button } from '@chakra-ui/button';
import { FormControl } from '@chakra-ui/form-control';
import { StarIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/image';
import { Input } from '@chakra-ui/input';
import { Badge, Box, Flex, Heading, Stack, VStack } from '@chakra-ui/layout';
import React from 'react';



function VideoItem({video, onVideoSelect}) {
  const myVideo = {
    imageUrl: `${video.snippet.thumbnails.medium.url}`,
    imageAlt: `${video.snippet.title}`,
    channeltitle: `${video.snippet.channelTitle}`,
    baths: 2,
    title: `${video.snippet.title}`,
    formattedPrice: "500k+ views ",
    reviewCount: `${video.snippet.publishedAt}`,
    rating: 4,
  }

  return (
    <>
    {/* <Stack>
    <VStack w="400px" my={5}>
      <img src={video.snippet.thumbnails.medium.url} />
      <Heading fontSize="sm" fontWeight="300">
        {video.snippet.title}
        <Badge borderRadius="full" px="2" colorScheme="teal">
          New
        </Badge>
      </Heading>
    </VStack>
  </Stack> */}
   <Box alignItems="center" justifyContent="center" onClick={() => onVideoSelect(video)} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={myVideo.imageUrl} alt={myVideo.imageAlt} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            Channel Title: {myVideo.channeltitle}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {myVideo.title}
        </Box>

        <Box>
          {myVideo.formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < myVideo.rating ? "teal.500" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {myVideo.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
    </> 
  )
}
export default VideoItem;
