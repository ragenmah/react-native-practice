import React from 'react';
import {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet, TextInput, View, Text, Keyboard} from 'react-native';
import {color} from 'react-native-elements/dist/helpers';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TodoInput = ({addTodoBtnClicked}) => {
  const [task, setTask] = useState('');
  const [usedCharacters, setUsed] = useState(0);

  const addAtask = () => {
    Keyboard.dismiss();
    if (task != '') {
      setUsed(0);
      setTask('');
      addTodoBtnClicked(task);
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Add new task"
        style={styles.input}
        placeholderTextColor="#fff"
        onChangeText={text => {
          setUsed(text.length);
          setTask(text);
        }}
        value={task}
        maxLength={43}
      />

      <Text
        style={{
          fontSize: 12,
          marginTop: 5,
          color: 'lightgrey',
        }}>{`${usedCharacters}/43`}</Text>

      <TouchableOpacity onPress={addAtask} style={styles.roundButton}>
        <Icon name="plus-thick" color={color} size={22} />
      </TouchableOpacity>
    </View>
  );
};

export default TodoInput;

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    flexDirection: 'row',
    borderRadius: 45,
    paddingLeft: 15,
    width: '100%',
    height: 50,
    backgroundColor: '#918d8d',
    justifyContent: 'space-between',
    // marginTop: '100%',
    bottom: 10,
  },
  input: {
    color: 'white',
    fontSize: 16,
    width: '80%',
    // position: 'absolute',
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
    // left: '88%',
    bottom: 0,
    position: 'relative',
  },
});
