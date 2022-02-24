import React from 'react';

const taskContext = 
   React.createContext({
    tasks: [],
    addNewTask: task => {},
    deleteTask: taskId => {},
    isDoneTasks:taskId => {},
  });


export default taskContext;
