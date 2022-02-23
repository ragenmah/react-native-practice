import React from 'react';
import {StyleSheet,Text, View} from 'react-native';
// import { ListItem } from 'react-native-elements/dist/list/ListItem';
import TodoInput from '../components/todo/TodoInput';
import TodoList from '../components/todo/TodoList';
const TodoScreen = () => {
  return (
    <>
      <Text style={styles.text}>ToDo</Text>
        <View style={styles.fill}>
        <TodoList />
        
        <TodoInput/>
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
  text:{
      fontSize:20,
      backgroundColor:"#3d3c3c",
      color:"#ffffff",
      padding:10
  },
  list:{
      backgroundColor:"black",
      height:100
      
  },
  fill:{
    //   display:'flex',
      flex:1

  }
});
