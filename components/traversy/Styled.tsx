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

const SeanFlex = styled(Flex)`
  align: 'center';
  justify-content: 'center';
  border-radius: 10px;

  padding: 20px;
  margin: 15px;
  transition-duration: 0.1s;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 255, 0.2);
  :hover {
    box-shadow: 12px 12px 12px 1px rgba(223, 3, 172, 0.2);
    transition: all 0.2s ease-out;
    padding: 25px;
    margin: 15px;
  }
`;

const MyFlex = styled(Flex)`
  align-items: 'center';
`;
const MyFooter = styled(Flex)`
  align-items: 'center';

  overflow: hidden;

  bottom: 0;
  top: 0;
`;

export { SeanFlex, MyFlex, MyFooter };
