import React, {useContext, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import doneContext from '../context/doneContext';
import taskContext from '../context/taskContext';

const TodoDoneScreen = () => {
  const doneTaskContext = useContext(doneContext);
  const taskContexts = useContext(taskContext);

  var isSelected = true;
  return (
    <View style={styles.wholeContainer}>
      <Text style={styles.text}>ToDo</Text>
      <FlatList
        data={doneTaskContext.tasksDone}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <View style={styles.container}>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={isSelected}
                  tintColors={{true: '#fff'}}
                  onValueChange={() => {
                    isSelected = !isSelected;
                    doneTaskContext.deleteDoneTask(index);
                  }}
                  style={styles.checkbox}
                />
                <Text style={styles.label}>{item}</Text>
              </View>

              <TouchableOpacity
                onPress={() => {
                  doneTaskContext.deleteDoneTask(index);
                }}
                style={styles.icon}>
                <Icon name="delete" color="#fff" size={30} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default TodoDoneScreen;

const styles = StyleSheet.create({
  wholeContainer: {
    height: '100%',
    backgroundColor: 'black',
  },
  container: {
    position: 'relative',
    backgroundColor: '#918d8d',
    height: 70,
    borderRadius: 10,
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    // marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
    color: '#fff',
  },
  icon: {
    backgroundColor: '#918d8d',
  },
  text: {
    fontSize: 20,
    backgroundColor: '#3d3c3c',
    color: '#ffffff',
    padding: 10,
  },
});
