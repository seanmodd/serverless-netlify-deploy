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

const pressedStyle = {
  color: '#ff00ae',
  width: 'auto',
  transition: 'all 0.2s ease-out',

  boxShadow: '6px 12px #ff00ae',
  fontWeight: '400',
};

const SideButton = ({ children }) => (
  <>
    <Spacer />

    {children}
    <Spacer />
  </>
);
const SideImportant = ({ children }) => (
  <>
    <VStack>
      <Spacer />
      {children}
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
    <Heading mb={15} textColor="red.500" fontSize={20} fontWeight="normal">
      {children}
    </Heading>
  </>
);

const Task = ({ task, onDelete, onToggle }) => (
  <>
    <NewFlex>
      <NewStack>
        <SideText>{task.text}</SideText>
        <SideDate>{task.day}</SideDate>
        <SideReminder>{`${
          task.reminder ? 'important!!!' : 'not important'
        }`}</SideReminder>
      </NewStack>
      <SideButton>
        <CloseIcon
          _hover={pressedStyle}
          cursor="pointer"
          color="red.500"
          onClick={() => onDelete(task.id)}
        />
      </SideButton>
      <SideImportant>
        <Button
          colorScheme="whatsapp"
          _hover={pressedStyle}
          onDoubleClick={() => onToggle(task.id)}
        >
          ?!
        </Button>
      </SideImportant>
    </NewFlex>
  </>
);

export default Task;
