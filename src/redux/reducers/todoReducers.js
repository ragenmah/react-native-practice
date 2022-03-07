import {
  ADD_TODO,
  DELETE_TODO,
  CHECK_DONE_TODO,
  DELETE_DONE_TODO,
} from '../constants/todoConstants';

const initialState = {
  newTodo: [],
  doneTodo: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      var newTodo = [...state.newTodo, action.payload];
      return {...state, newTodo: newTodo};
    }
    case DELETE_TODO: {
      return {
        ...state,
        newTodo: state.newTodo.filter(
          (todo, index) => index !== action.payload,
        ),
      };
    }
    case CHECK_DONE_TODO: {
      var checkNewTodo =
        action.payload.isChecked === true ? state.newTodo : state.doneTodo;
      if (action.payload.isChecked === true)
        return {
          ...state,
          newTodo: state.newTodo.filter(
            (todo, index) => index !== action.payload.data,
          ),
          doneTodo: [
            ...state.doneTodo,
            checkNewTodo.splice(action.payload.data, 1),
          ],
        };
      else
        return {
          ...state,
          newTodo: [
            ...state.newTodo,
            checkNewTodo.splice(action.payload.data, 1),
          ],
          doneTodo: state.doneTodo.filter(
            (todo, index) => index !== action.payload.data,
          ),
        };
    }
    case DELETE_DONE_TODO: {
      return {
        ...state,
        doneTodo: state.doneTodo.filter(
          (todo, index) => index !== action.payload,
        ),
      };
    }
    default:
      return state;
  }
};
