import { Button, IconButton } from '@chakra-ui/button';
import { useColorModeValue as mode } from '@chakra-ui/color-mode';
import { CloseIcon, WarningIcon } from '@chakra-ui/icons';
import { Flex, Heading, HStack, Spacer, Text, VStack } from '@chakra-ui/layout';
import { css, jsx } from '@emotion/react';
import styled from 'styled-components';
import { SeanButton, SeanFlex } from './Styled';
import classes from './contact-form.module.css';

const NewFlex = ({ children }) => (
  <>
    <SeanFlex
      d="flex"
      w={['250px', '300px', '350px', '400px']}
      bg={mode('gray.100', 'gray.700')}
    >
      {children}
    </SeanFlex>
  </>
);

const NewStack = ({ children }) => (
  <>
    <VStack alignItems={['left', 'right']} justifyContent={['left', 'right']}>
      {children}
    </VStack>
  </>
);
const SideButton = ({ children }) => (
  <>
    <Spacer />
    <VStack>
      <CloseIcon cursor="pointer" color="red.500" mt={3} ml={4} />
      <Spacer />
      <Button colorScheme="whatsapp">?!</Button>
    </VStack>
  </>
);
const SideText = ({ children }) => (
  <>
    <HStack>
      <Text
        alignItems={['left', 'right']}
        justifyContent={['left', 'right']}
        fontSize={30}
        color={mode('grey.900', 'gray.50')}
        ml={10}
        fontWeight="semibold"
      >
        {children}
      </Text>
    </HStack>
  </>
);

const SideDate = ({ children }) => (
  <>
    <Text
      alignItems={['left', 'center']}
      color={mode('grey.900', 'gray.50')}
      m={1}
    >
      Date: {children}
    </Text>
  </>
);

const SideReminder = ({ children }) => (
  <>
    {{ children } && (
      <Heading mb={15} textColor="red.500" fontSize={20} fontWeight="normal">
        Reminder!
      </Heading>
    )}
  </>
);

const Task = ({ task }) => (
  <>
    <NewFlex>
      <NewStack>
        <SideText>{task.text}</SideText>
        <SideDate>{task.day}</SideDate>
        <SideReminder>{task.reminder}</SideReminder>
      </NewStack>
      <SideButton />
    </NewFlex>
  </>
);

export default Task;
