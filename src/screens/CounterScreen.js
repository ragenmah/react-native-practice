import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {increaseNumber, decreaseNumber} from '../redux/actions/counterActions';
// import store from '../redux/store';

const CounterScreen = () => {
  const dispatch = useDispatch();
  const {counterReducers} = useSelector(state => state);

  const increaseBtnClicked = () => dispatch(increaseNumber());
  const decreaseBtnClicked = () => dispatch(decreaseNumber());

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`Counter`}</Text>
      <View style={styles.counterContainer}>
        <TouchableOpacity
          onPress={increaseBtnClicked}
          style={styles.roundButton}>
          <Icon name="plus-thick" color={'#000'} size={22} />
        </TouchableOpacity>
        <Text style={styles.text}>0</Text>
        <TouchableOpacity
          onPress={decreaseBtnClicked}
          style={styles.roundButton}>
          <Icon name="minus" color={'#000'} size={22} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterContainer: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 30,
  },
  roundButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginRight: 5,
    borderRadius: 100,
    backgroundColor: 'white',
    bottom: 0,
    position: 'relative',
  },
});
