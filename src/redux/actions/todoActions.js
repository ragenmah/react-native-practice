import {
  ADD_TODO,
  DELETE_TODO,
  CHECK_DONE_TODO,
  DELETE_DONE_TODO,
} from '../constants/todoConstants';

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload:data
  };
};

export const deleteTodo = (data) => {
  return {
    type: DELETE_TODO,
    payload:data
  };
};

export const checkDoneTodo = (data,check) => {
  return {
    type: CHECK_DONE_TODO,
    payload:{data:data,isChecked:check}
  };
};

export const deleteDoneTodo = (doneId) => {
  return {
    type: DELETE_DONE_TODO,
    payload:doneId
  };
};
