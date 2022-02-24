import React, {useState} from 'react';
import doneContext from './context/doneContext';
import taskContext from './context/taskContext';

const DataProvider = props => {
  const [tasks, setTask] = useState([]);
//   const [doneTasks, setDoneTask] = useState([]);
//  var  doneTasks=[]
  const addNewTask = task => {
    const list = currentArray => [...currentArray, task];
    setTask(list);
  };

  const deleteTask = taskId => {
    console.log(taskId);
    const removedtask = tasks.splice(taskId, 1);
    const filteredTask = tasks.filter((tasks, index) => tasks !== taskId);
    setTask(filteredTask);
  };

  const isDoneTasks = taskId => {
    // console.log(taskId);
    // const removetask = tasks.splice(taskId, 1);
    // const filterTask = tasks.filter((tasks, index) => tasks !== taskId);
    // // const donelist = arry => [...arry, removetask];
    // // doneTasks=donelist
    // setTask(filterTask);
  };

  const deleteDoneTask = taskId => {
    console.log(taskId);
    // const removedtask = tasks.splice(taskId, 1);
    // const donelist = arry => [...arry, removedtask];
    // const filteredTask = tasks.filter((tasks, index) => tasks !== taskId);
    // setDoneTask(donelist);
  };
  return (
    <taskContext.Provider
      value={{
        tasks: tasks,
        addNewTask: addNewTask,
        deleteTask: deleteTask,
        isDoneTasks: isDoneTasks,
      }}>
      <doneContext.Provider
        value={{
          tasksDone: [],
          deleteDoneTask: deleteDoneTask,
        }}
        >
        {props.children}
      </doneContext.Provider>
    </taskContext.Provider>
  );
};

export default DataProvider;
