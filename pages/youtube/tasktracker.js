import { useState, useEffect } from 'react';
import { useColorModeValue as mode } from '@chakra-ui/color-mode';
import { Flex, Heading, VStack } from '@chakra-ui/layout';
import { css, jsx } from '@emotion/react';
import Tasks from '../../components/traversy/Tasks';
import FormButton from '../../components/traversy/FormButton';
import Navbar from '../../components/chakraPro/NavbarWithRightCta/Navbar';
import { MyFlex } from '../../components/traversy/Styled';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Teachers',
      day: 'Mar 5th at 2:30pm',
      reminder: false,
    },
    {
      id: 3,
      text: 'Warriors',
      day: 'Apr 5th at 2:30pm',
      reminder: true,
    },
  ]);
  // state toggles for showing and hiding the form
  const [showForm, setShowForm] = useState(false);
  // delete tasks

  // adding new form items

  // toggle reminder

  // The Actual Components:

  return (
    <>
      <Navbar />
      <MyFlex bg={mode('gray.50', 'gray.800')}>
        <VStack>
          <Heading fontWeight="500" mt="100px" mb={4}>
            The Task Tracker App
          </Heading>{' '}
          <FormButton />
          {tasks.length > 0 ? (
            <Tasks tasks={tasks} />
          ) : (
            <Heading fontSize={80} textColor="red.500">
              No tasks to show!
            </Heading>
          )}
        </VStack>
      </MyFlex>
    </>
  );
}

export default App;
