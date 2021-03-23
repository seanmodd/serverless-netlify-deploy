import { useColorModeValue as mode } from '@chakra-ui/color-mode';
import { Flex, Heading } from '@chakra-ui/layout';
import Task from './Task';

const SideHeading = ({ children }) => (
  <>
    <Heading color={mode('gray.900', 'gray.50')} fontWeight="normal">
      {children} tasks!!
    </Heading>
  </>
);

const Tasks = ({ tasks, onDelete, onToggle }) => (
  <>
    {tasks.length > 0 && <SideHeading>{tasks.length}</SideHeading>}

    <Flex />
    {tasks.map((task) => (
      <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
    ))}
  </>
);

export default Tasks;
