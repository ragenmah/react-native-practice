import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {checkDoneTodo, deleteDoneTodo} from '../redux/actions/todoActions';

const TodoDoneScreen = () => {
  const {todoReducers} = useSelector(state => state);
  const dispatch = useDispatch();
  const doneTodoBtnClicked = (todo, isChecked) =>
    dispatch(checkDoneTodo(todo, isChecked));
  const deleteTodoBtnClicked = doneId => dispatch(deleteDoneTodo(doneId));

  var isSelected = true;

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.container}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected}
            tintColors={{true: '#fff'}}
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
    <View style={styles.wholeContainer}>
      <Text style={styles.text}>ToDo</Text>
      <FlatList
        data={todoReducers.doneTodo || []}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
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
