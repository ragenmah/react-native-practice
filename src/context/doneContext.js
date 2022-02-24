import React from 'react';

const doneContext = 
   React.createContext({
    tasksDone: [],
    deleteDoneTask: taskId => {},
    // isDoneTasks:taskId => {},
  });


export default doneContext;