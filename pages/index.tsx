import { useState, useEffect } from 'react';
import { useColorModeValue as mode } from '@chakra-ui/color-mode';
import { Flex, Heading, Spacer, VStack } from '@chakra-ui/layout';
import { css, jsx } from '@emotion/react';
import { AddIcon } from '@chakra-ui/icons';
import { isTargetLikeServerless } from 'next/dist/next-server/server/config';
import Tasks from '../components/traversy/Tasks';
import FormButton from '../components/traversy/FormButton';
import Navbar from '../components/chakraPro/NavbarWithRightCta/Navbar';
import { MyFlex } from '../components/traversy/Styled';
import AddTask from '../components/traversy/AddTask';
import MyNavbar from '../components/udemy/youtube/MyNavbar';

const SideFlex = ({ children }) => (
  <>
    <MyFlex
      alignItems="center"
      textAlign="center"
      justifyContent="center"
      bg={mode('gray.50', 'gray.800')}
      pb="50px"
    >
      {children}
    </MyFlex>
  </>
);

const pressedStyle = {
  width: 'auto',
  transition: 'all 0.5s ease-out',
  textShadow: '3px 3px #f2ff00',
};

const SideHeading = ({ children }) => (
  <>
    <Heading
      alignItems="center"
      textAlign="center"
      justifyContent="center"
      mb={10}
      textShadow="3px 3px #ff00ae"
      fontSize={['40px', '50px', '60px', '70px']}
      _hover={pressedStyle}
    >
      {children}
    </Heading>
  </>
);

const OtherSideHeading = ({ children }) => (
  <>
    <Heading
      color={mode('gray.900', 'gray.50')}
      fontSize={{ base: '25px', md: '30px', lg: '35px' }}
      fontWeight="200"
      mt="100px"
    >
      {children}
    </Heading>
  </>
);

//! below is where the function starts

function App() {
  const [tasksList, setTasksList] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasksList(tasksFromServer);
    };

    getTasks();
  }, []);

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();

    return data;
  };

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  // state toggles for showing and hiding the form
  const [showForm, setShowForm] = useState(false);

  // delete tasks
  const deleteTask = async (taskId) => {
    await fetch(`http://localhost:5000/tasks/${taskId}`, {
      method: 'DELETE',
    });

    setTasksList(tasksList.filter((task) => task.id !== taskId));
  };
  // adding new form items with a fake ID
  // const addTask = (task) => {
  // const id = Math.floor(Math.random() * 10000) + 1;
  // const newTask = { id, ...task };
  // setTasksList([...tasksList, newTask]);
  // };
  // adding tasks the right way

  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasksList([...tasksList, data]);
  };

  // toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    setTasksList(
      tasksList.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  // The Actual Components:

  return (
    <>
      <Navbar />
      <SideFlex>
        <VStack>
          <OtherSideHeading>Welcome to...</OtherSideHeading>
          <SideHeading>The Task Tracker App</SideHeading>
          <FormButton
            toggleForm={() => setShowForm(!showForm)}
            showAdd={showForm}
          />
          {showForm && <AddTask addTask={addTask} />}
          {tasksList.length > 0 ? (
            <Tasks
              tasks={tasksList}
              onDelete={deleteTask}
              onToggle={toggleReminder}
            />
          ) : (
            <Heading fontSize={80} textColor="red.500">
              No tasks to show!
            </Heading>
          )}
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <footer>Copyright &copy; 2021</footer>
        </VStack>
      </SideFlex>
    </>
  );
}

export default App;
