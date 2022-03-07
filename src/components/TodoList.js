import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, checkDoneTodo, deleteTodo} from '../redux/actions/todoActions';

import TodoInput from './TodoInput';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const dispatch = useDispatch();
  const {todoReducers} = useSelector(state => state);
  const addTodoBtnClicked = todo => dispatch(addTodo(todo));
  const deleteTodoBtnClicked = todo => dispatch(deleteTodo(todo));
  const doneTodoBtnClicked = (todo, isChecked) =>
    dispatch(checkDoneTodo(todo, isChecked));

  return (
    <View style={styles.list}>
      <TodoListItem
        todoReducers={todoReducers}
        doneTodoBtnClicked={doneTodoBtnClicked}
        deleteTodoBtnClicked={deleteTodoBtnClicked}
      />
      <TodoInput addTodoBtnClicked={addTodoBtnClicked} />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
    // position:'absolute',
    color: 'white',
  },
});
