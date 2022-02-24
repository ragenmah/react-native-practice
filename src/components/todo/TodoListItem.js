import React, {useContext, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import taskContext from '../../context/taskContext';

const TodoListItem = () => {
  const [isSelected, setSelection] = useState(false);

  const taskContexts = useContext(taskContext);
  return (
    <FlatList
      data={taskContexts.tasks}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({item, index}) => {
        return (
          <View style={styles.container}>
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isSelected}
                onValueChange={taskContexts.isDoneTasks(index)}
                style={styles.checkbox}
              />
              <Text style={styles.label}>{item}</Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                taskContexts.deleteTask(index);
              }}
              style={styles.icon}>
              <Icon name="delete" color="#fff" size={30} />
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
};

export default TodoListItem;

const styles = StyleSheet.create({
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
});
