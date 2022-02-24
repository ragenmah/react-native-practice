import React, { useContext } from 'react';
import { useState } from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet, TextInput, View} from 'react-native';
import {color} from 'react-native-elements/dist/helpers';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {CommonStyles} from '../../constants';
import taskContext from '../../context/taskContext';


const TodoInput = () => {
  const [task, setTask] = useState('');
 
  const taskContexts = useContext(taskContext);
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Add new task"
        style={styles.input}
        placeholderTextColor="#fff"
        onChangeText={text => {
          setTask(text);
        }}
        // value={""}
        maxLength={43}
      />
      <TouchableOpacity onPress={() => {taskContexts.addNewTask(task)
      
      }} style={styles.roundButton}>
        <Icon name="plus-thick" color={color} size={22} />
      </TouchableOpacity>
    </View>
  );
};

export default TodoInput;

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    flex: 1,
    flexDirection: 'column',
    bottom: 100,
    top: '87%',
  },
  input: {
    color: 'white',
    fontSize: 16,
    borderRadius: 45,
    paddingLeft: 15,
    width: '100%',
    backgroundColor: '#918d8d',
    position: 'absolute',
  },
  roundButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,

    borderRadius: 100,
    backgroundColor: 'white',
    left: '88%',
    bottom: 0,
    position: 'relative',
  },
});
