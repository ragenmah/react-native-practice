import React from 'react'

import {StyleSheet,Text, View} from 'react-native';
import TodoInput from './TodoInput';
import TodoListItem from './TodoListItem';
const TodoList = () => {
  return (
    <View style={styles.list}>
        {/* <Text>HELLO</Text> */}
        <TodoListItem/>
        <TodoInput/>
    </View>
  )
}

export default TodoList

const styles = StyleSheet.create({
   
    list:{
        backgroundColor:"black",
        height:"100%",
        width:"100%",
        // position:'absolute',
        color:"white"
        
    }
  });