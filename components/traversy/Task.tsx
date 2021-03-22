import { Button, IconButton } from '@chakra-ui/button';
import { useColorModeValue as mode } from '@chakra-ui/color-mode';
import { CloseIcon, WarningIcon } from '@chakra-ui/icons';
import { Flex, Heading, HStack, Spacer, Text, VStack } from '@chakra-ui/layout';
import { css, jsx } from '@emotion/react';
import styled from 'styled-components';
import { SeanButton, SeanFlex } from './Styled';
import classes from './contact-form.module.css';

const Task = ({ task }) => (
  <>
    <SeanFlex bg={mode('gray.100', 'gray.700')}>
      <VStack>
        <HStack>
          <Text
            fontSize={30}
            color={mode('grey.900', 'gray.50')}
            ml={10}
            fontWeight="semibold"
          >
            {task.text}
          </Text>
        </HStack>
        <Text color={mode('grey.900', 'gray.50')} m={1}>
          Date: {task.day}
        </Text>
        {task.reminder && (
          <Heading
            mb={15}
            textColor="red.500"
            fontSize={20}
            fontWeight="normal"
          >
            Reminder!
          </Heading>
        )}
      </VStack>

      <Spacer />
      <VStack>
        <CloseIcon cursor="pointer" color="red.500" mt={3} ml={4} />
        <Spacer />
        <Button colorScheme="whatsapp">?!</Button>
      </VStack>
    </SeanFlex>
  </>
);

export default Task;
