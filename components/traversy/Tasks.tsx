import { useColorModeValue as mode } from '@chakra-ui/color-mode';
import { Flex, Heading } from '@chakra-ui/layout';
import Task from './Task';

const Tasks = ({ tasks }) => (
  <>
    {tasks.length > 0 && (
      <Heading color={mode('gray.900', 'gray.50')} fontWeight="normal">
        {tasks.length} tasks!
      </Heading>
    )}
    <Flex alignItems="center" />
    {tasks.map((task) => (
      <Task key={task.id} task={task} />
    ))}
  </>
);

export default Tasks;
