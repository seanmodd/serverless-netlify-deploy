import { useState, useEffect } from 'react';
import { useColorModeValue as mode } from '@chakra-ui/color-mode';
import { Flex, Heading, VStack } from '@chakra-ui/layout';
import { css, jsx } from '@emotion/react';
import Tasks from '../components/traversy/Tasks';
import FormButton from '../components/traversy/FormButton';
import Navbar from '../components/chakraPro/NavbarWithRightCta/Navbar';
import { MyFlex } from '../components/traversy/Styled';

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
      <MyFlex
        alignItems="center"
        justifyContent="center"
        bg={mode('gray.50', 'gray.800')}
        pb="50px"
      >
        <VStack>
          <Heading
            color={mode('gray.900', 'gray.50')}
            fontSize={65}
            fontWeight="200"
            mt="100px"
          >
            The Task Tracker App
          </Heading>
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
