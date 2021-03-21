import { Button } from '@chakra-ui/button';
import { Checkbox } from '@chakra-ui/checkbox';
import styled from 'styled-components';
import { Input } from '@chakra-ui/input';
import { Flex, VStack } from '@chakra-ui/layout';
import { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';

const AddTask = () => (
  <>
    <Flex>
      <form onSubmit={onSubmit}>
        <VStack m={15} p={15}>
          <Input placeholder="text" />
          <Input placeholder="date anddfd time" />
        </VStack>
        <Flex>
          <FormLabel>Set Reminder</FormLabel>
          <Checkbox
            type="checkbox"
            // value={reminder}
          />
        </Flex>
        <Button type="submit" bg="black" textColor="white">
          Save Task
        </Button>
      </form>
    </Flex>
  </>
);

export default AddTask;
