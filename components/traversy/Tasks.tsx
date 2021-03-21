import { useColorModeValue as mode } from '@chakra-ui/color-mode';
import { Flex, Heading } from '@chakra-ui/layout';
import { css, jsx } from '@emotion/react';
import Task from './Task';
import { MyButton, MyButtonChakra } from './Styled';

const Tasks = ({ tasks }) => (
  <>
    {tasks.length > 0 && (
      <Heading fontWeight="normal">{tasks.length} tasks!</Heading>
    )}
    <Flex alignItems="center" />
    {tasks.map((task) => (
      <Task key={task.id} task={task} />
    ))}
  </>
);

export default Tasks;

// {tasks.length > 0 && (
//   <Heading
//     css={css`
//       font-size: 44px;
//       font-weight: 'bold';
//     `}
//   >
//     {tasks.length} tasks!
//   </Heading>
