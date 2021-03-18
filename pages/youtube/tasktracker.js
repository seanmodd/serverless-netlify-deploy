import { useState, useEffect } from 'react';

import { Flex, Heading, VStack } from '@chakra-ui/layout';

import Tasks from '../../components/traversy/Tasks';
import AddTask from '../../components/traversy/AddTask';
import FormButton from '../../components/traversy/FormButton';

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
      text: 'Firefighters',
      day: 'Apr 5th at 2:30pm',
      reminder: true,
    },
  ]);

  // useEffect async to get it from server
  // useEffect(() => {
  //   const getTasks = async () => {
  //     const tasksFromServer = await fetchTasks();
  //     setTasks(tasksFromServer);
  //   };
  //   getTasks();
  // }, []);

  // originally a part of the useEffect above when first building this
  // const fetchTasks = async () => {
  //   const res = await fetch('http://localhost:5000/tasks');
  //   const data = await res.json();

  //   return data;
  // };

  // delete tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // delete tasks with async now added to hook it up to server
  // const deleteTask = async (id) => {
  //   await fetch(`http://localhost:5000/tasks/${id}`, {
  //     method: 'DELETE',
  //   });
  //   setTasks(tasks.filter((task) => task.id !== id));
  // };

  // adding new form items
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // add tasks with async now added to hook it up to server
  // in the video its called fetchTasks not addTask
  // const addTask = async (task) => {
  //   const res = await fetch('http://localhost:5000/tasks', {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify(task),
  //   });
  //   const data = await res.json();
  //   setTasks([...tasks, data]);
  // };

  // add task with async now added to hook it up to server
  // in the video its called fetchTask
  // const fetchTask = async (id) => {
  //   const res = await fetch(`http://localhost:5000/tasks/${id}`);
  //   const data = await res.json();
  //   return data;
  // };

  // toggle reminder
  const reminderToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // NOW SAVING IT TO SERVER toggle reminder
  // const reminderToggle = async (id) => {
  //   const taskToToggle = await fetchTask(id);
  //   const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

  //   const res = await fetch(`http://localhost/5000/tasks/${id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(updTask),
  //   });
  //   const data = await res.json();
  //   setTasks(
  //     tasks.map((task) =>
  //       task.id === id ? { ...task, reminder: data.reminder } : task
  //     )
  //   );
  // };

  // state toggles for showing and hiding the form
  const [showForm, setShowForm] = useState(false);
  const showAdd = { showForm };

  // The Actual Components:

  return (
    <>
      <Flex h="auto">
        <VStack>
          <Heading fontWeight="500" mt={10} mb={4}>
            The Task Tracker App
          </Heading>{' '}
          <FormButton onAdd={() => setShowForm(!showForm)} />
          {tasks.length > 0 && (
            <Heading fontSize={28} fontWeight="300">
              {tasks.length} tasks!
            </Heading>
          )}
          {showForm && <AddTask onAdd={addTask} />}
          {tasks.length > 0 ? (
            <Tasks
              tasks={tasks}
              onDelete={deleteTask}
              onToggle={reminderToggle}
            />
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
