import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TodoList from '../components/TodoList';

const TodoScreen = () => {
  return (
    <>
      <Text style={styles.text}>ToDo</Text>
      <View style={styles.fill}>
        <TodoList />
      </View>
    </>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  text: {
    fontSize: 20,
    backgroundColor: '#3d3c3c',
    color: '#ffffff',
    padding: 10,
  },
  list: {
    backgroundColor: 'black',
    height: 100,
  },
  fill: {
    //   display:'flex',
    flex: 1,
    flexDirection: 'column',
  },
});
