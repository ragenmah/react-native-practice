import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TodoListItem = ({
  todoReducers,
  doneTodoBtnClicked,
  deleteTodoBtnClicked,
}) => {
  var isSelected = false;
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.container}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            onCheckColor={'#fff'}
            tintColors={{true: '#fff', false: '#fff'}}
            value={isSelected}
            onValueChange={() => {
              isSelected = !isSelected;
              doneTodoBtnClicked(index, isSelected);
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>{item}</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            deleteTodoBtnClicked(index);
          }}
          style={styles.icon}>
          <Icon name="delete" color="#fff" size={30} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <FlatList
      data={todoReducers.newTodo || []}
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderItem}
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
