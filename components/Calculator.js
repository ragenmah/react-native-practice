import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, TextInput, Image, StyleSheet, Alert} from 'react-native';
import {Button} from 'react-native-elements';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState(0);
  const [symbol, setSymbol] = useState('#');
  const [result, setResult] = useState('Result');
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (num1 === 0 || num2 === 0 || isNaN(num1) || isNaN(num2)) {
      if (num1 === 0 && num2 === 0) {
        Alert.alert(`Both inputs are zeros`);
        return;
      }
      Alert.alert(`Enter numbers to calculate`);
      return;
    }

    switch (symbol) {
      case '+':
        setResult(num1 + num2);
        return;
      case '-':
        setResult(num1 - num2);
        return;
      case 'x':
        setResult(num1 * num2);
        return;
      case '/':
        setResult(num1 / num2);
        return;
      default:
        return;
    }
  }, [toggle]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Casio_calculator_JS-20WK_in_201901_002.jpg',
        }}
      />

      <Text style={styles.title}>Simple Calculator</Text>

      <View style={styles.calcContainer}>
        <Text style={styles.headingText}>Enter any two numbers</Text>

        <View style={styles.inputFields}>
          <TextInput
            style={styles.input}
            placeholder="Number 1"
            placeholderTextColor="#9a73ef"
            keyboardType="phone-pad"
            onChangeText={text => setNum1(parseInt(text))}
          />

          <Text style={styles.signText}>{symbol}</Text>

          <TextInput
            style={styles.input}
            placeholder="Number 2"
            placeholderTextColor="#9a73ef"
            keyboardType="phone-pad"
            onChangeText={text => setNum2(parseInt(text))}
          />

          <Text style={styles.signText}>
            = {symbol == '/' ? Number(result).toFixed(2) : result}
          </Text>
        </View>
        
        <Text style={styles.headingText}>
          {result === 0
            ? null
            : result > 0
            ? `The calculation is positive`
            : `The calculation is negetive`}
        </Text>

        <View style={styles.btnContainer}>
          <Button
            title="Add"
            color="#841584"
            containerStyle={styles.btnContainerStyle}
            titleStyle={{fontWeight: 'bold'}}
            buttonStyle={styles.btnStyle}
            onPress={() => {
              setSymbol('+');
              setToggle(!toggle);
            }}
          />

          <Button
            title="Subtract"
            color="#841584"
            containerStyle={styles.btnContainerStyle}
            buttonStyle={styles.btnStyle}
            onPress={() => {
              setSymbol('-');
              setToggle(!toggle);
            }}
          />

          <Button
            title="Multiply"
            color="#841584"
            containerStyle={styles.btnContainerStyle}
            buttonStyle={styles.btnStyle}
            onPress={() => {
              setSymbol('x');
              setToggle(!toggle);
            }}
          />

          <Button
            title="Divide"
            color="#841584"
            containerStyle={styles.btnContainerStyle}
            buttonStyle={styles.btnStyle}
            onPress={() => {
              setSymbol('/');
              setToggle(!toggle);
            }}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2E3B55',
  },
  calcContainer: {
    flex: 1,
    paddingTop: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 20,
    paddingTop: 10,
    color: 'white',
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    paddingTop: '20%',
  },
  backgroundImage: {
    height: 200,
    width: 2100,
    position: 'relative',
  },
  input: {
    margin: 15,
    paddingLeft: 10,
    height: 40,
    width: '20%',
    borderColor: '#FFFF0F',
    borderWidth: 1,
    borderRadius: 10,
    color: 'white',
  },
  inputFields: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10%',
  },
  signText: {
    color: 'white',
    fontSize: 30,
  },
  btnContainer: {
    flex: 0,
    flexDirection: 'column',
    alignItems: 'center',
    width: 200 * 2,
  },
  btnContainerStyle: {
    width: '85%',
    marginHorizontal: 50,
    marginVertical: 10,
  },
  btnStyle: {
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 30,
  },
});
export default Calculator;
