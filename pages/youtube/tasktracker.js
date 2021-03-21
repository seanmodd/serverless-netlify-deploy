import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Flex, Heading, VStack } from '@chakra-ui/layout';
import { css, jsx } from '@emotion/react';
import classes from '../../components/traversy/contact-form.module.css';
import Tasks from '../../components/traversy/Tasks';
import AddTask from '../../components/traversy/AddTask';
import FormButton from '../../components/traversy/FormButton';
import Navbar from '../../components/chakraPro/NavbarWithRightCta/Navbar';
import ButtonU from '../../components/traversy/ButtonU';

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

      <Flex alignItems="center" justifyContent="center" h="auto">
        <VStack>
          <Heading fontWeight="500" mt="100px" mb={4}>
            The Task Tracker App
          </Heading>{' '}
          <FormButton />
          {tasks.length > 0 && (
            <Heading
              css={css`
                font-size: 44px;
                font-weight: 100;
              `}
            >
              {tasks.length} tasks!
            </Heading>
          )}
          {tasks.length > 0 ? (
            <Tasks tasks={tasks} />
          ) : (
            <Heading
              my={100}
              pt={40}
              fontWeight="normal"
              fontSize={80}
              textColor="red.500"
            >
              No tasks to show!
            </Heading>
          )}
        </VStack>
      </Flex>
    </>
  );
}

export default App;
