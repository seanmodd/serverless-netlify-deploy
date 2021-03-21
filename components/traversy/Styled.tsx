import {
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { useColorModeValue as mode } from '@chakra-ui/color-mode';
import styled, { css } from 'styled-components';

const MyButton = styled(Button)`
  border-radius: 5px;
  background: ${(p) => (p.secondary ? 'hotpink' : 'blue')};
  font-size: 1em;
  font-weight: 500;
  box-shadow: 10;
  color: ${(p) => (p.secondary ? 'black' : '#f6f6f6')};
  ${(p) =>
    p.large
      ? css`
          padding: 40px;
          font-size: 2em;

          font-weight: normal;
          border-radius: 3px;
        `
      : css`
          padding: 14px;
        `}

  :hover {
    border-radius: 2px;
    background: ${(p) => (p.secondary ? 'blue' : 'hotpink')};
    font-weight: 700;
    font-size: 1.7em;
    color: ${(p) => (p.secondary ? 'white' : 'white')};
    ${(p) =>
      p.large
        ? css`
            font-size: 2.2em;
            box-shadow: 6px 6px 2px 1px rgba(0, 0, 255, 0.2);
          `
        : css`
            font-size: 1.2em;
            box-shadow: 6px 6px 2px 1px rgba(0, 0, 255, 0.2);
          `}
  }
`;

const SeanFlex = styled(Flex)`
  align: 'center';
  width: '50rem';
  border-radius: 10px;
  padding: 20px;
  margin: 15px;
  transition-duration: 0.1s;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 255, 0.2);
  :hover {
    box-shadow: 6px 6px 6px 1px rgba(0, 0, 255, 0.2);
    transition: all 0.2s ease-out;
  }
`;

const MyFlex = styled(Flex)`
  display: flow-root;
  align-items: 'center';
  align-content: 'center';
  align-self: 'center';
  height: 'auto';
  padding: 49px;
  justify-content: 'center';
`;

export { MyButton, SeanFlex, MyFlex };
