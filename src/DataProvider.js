import React, {useContext, useState} from 'react';
import doneContext from './context/doneContext';
import taskContext from './context/taskContext';

const DataProvider = props => {
  const doneTaskContext = useContext(doneContext);

  const [tasks, setTask] = useState([]);
  const [doneTasks, setDoneTask] = useState([]);
  //  var  doneTasks=[]
  const addNewTask = task => {
    if (task != '') {
      const list = currentArray => [...currentArray, task];
      setTask(list);
    }
  };

  const deleteTask = taskId => {
    console.log(taskId);
    const removedtask = tasks.splice(taskId, 1);
    const filteredTask = tasks.filter((tasks, index) => tasks !== taskId);
    setTask(filteredTask);
  };

  const isDoneTasks = taskId => {
    const removedtask = tasks.splice(taskId, 1);
    const donelist = arry => [...arry, removedtask];
    doneTaskContext.tasksDone = donelist;
    setDoneTask(donelist);
  };

  const deleteDoneTask = taskId => {
    console.log('task id', taskId);
    // var doneTasks1= doneTaskContext.tasksDone ;
    const removedtask = doneTasks.splice(taskId, 1);
    const filteredTask = doneTasks.filter(
      (doneTasks, index) => doneTasks !== taskId,
    );
    setDoneTask(filteredTask);
  };

  const isCheckedDoneTask = taskId => {
    const removedtask = doneTasks.splice(taskId, 1);
    const donelist = arry => [...arry, removedtask];
    setTask(donelist);
  };

  return (
    <taskContext.Provider
      value={{
        tasks: tasks,
        doneTasks: [],
        addNewTask: addNewTask,
        deleteTask: deleteTask,
        isDoneTasks: isDoneTasks,
      }}>
      <doneContext.Provider
        value={{
          tasksDone: doneTasks,
          deleteDoneTask: deleteDoneTask,
          isChecked:isCheckedDoneTask
        }}>
        {props.children}
      </doneContext.Provider>
    </taskContext.Provider>
  );
};

export default DataProvider;
