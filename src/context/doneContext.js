import React from 'react';

const doneContext = 
   React.createContext({
    tasksDone: [],
    deleteDoneTask: taskId => {},
    isChecked:taskId => {},
  });


export default doneContext;