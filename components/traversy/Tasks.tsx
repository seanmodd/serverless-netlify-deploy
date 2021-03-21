import { useColorModeValue as mode } from '@chakra-ui/color-mode';
import { Button } from '@chakra-ui/button';
import { Flex, Heading } from '@chakra-ui/layout';
import styled from 'styled-components';
import AddTask from './AddTask';
import Task from './Task';
import { SeanButton } from './ButtonU';

const Tasks = ({ tasks }) => (
  <>
    <SeanButton
      bg={mode('gray.900', 'gray.100')}
      textColor={mode('gray.100', 'gray.900')}
    >
      Sean Button Test
    </SeanButton>
    <SeanButton>Here is a test</SeanButton>
    <Flex alignItems="center" />
    {tasks.map((task) => (
      <Task key={task.id} task={task} />
    ))}
  </>
);

export default Tasks;
