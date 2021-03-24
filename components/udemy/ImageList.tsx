import { Button } from '@chakra-ui/button';
import { FormControl } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Flex, Heading, Stack, VStack } from '@chakra-ui/layout';
import React from 'react';

const ImageList = (props) => {
  const images = props.images.map((image) => (
    <img key={image.id} src={image.urls.regular} />
  ));
  return (
    <>
      <Flex d="flex" flexDirection="column" alignItems="center" my={5}>
        <Stack>
          <VStack w="200px" my={5}>
            {images}
          </VStack>
        </Stack>
      </Flex>
    </>
  );
};

export default ImageList;
