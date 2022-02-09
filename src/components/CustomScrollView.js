import React, {useState} from 'react';
import {Text, TextInput, View, ScrollView, Alert} from 'react-native';

import {CustomButton, CustomFlatList} from '.';
import {CommonStyles} from '../constants/index';

const CustomScrollView = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  // var firstName,
  //   lastName,
  //   email,
  //   age = '';
  const [formData, setFormData] = useState('');
  return (
    <View style={CommonStyles.displayColumn}>
      <ScrollView style={CommonStyles.dFlex}>
        <View style={CommonStyles.dCenter}>
          <Text style={CommonStyles.headerText}>NEW USER FORM</Text>

          <TextInput
            placeholder="First Name"
            style={CommonStyles.input}
            onChangeText={text => {
              setFirstName(text);
            }}
            value={firstName}
          />

          <TextInput
            placeholder="Last Name"
            style={CommonStyles.input}
            onChangeText={text => {
              setLastName(text);
            }}
            value={lastName}
          />

          <TextInput
            placeholder="Email Address"
            keyboardType="email-address"
            style={CommonStyles.input}
            onChangeText={text => {
              setEmail(text);
            }}
            value={email}
          />

          <TextInput
            placeholder="Age"
            keyboardType="numeric"
            style={CommonStyles.input}
            onChangeText={text => {
              setAge(text);
            }}
            value={age}
          />

          <CustomButton
            onPress={() => {
              if (firstName != '' && lastName != '' && email != '' && age != '')
                setFormData({
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  age: age,
                });
              else {
                Alert.alert('All fields are required');
              }
              // clearFormInputs
              setFirstName('');
              setLastName('');
              setEmail('');
              setAge('');

              // console.log("hello", formData)
            }}
            title="Submit"
          />
        </View>
      </ScrollView>

      <CustomFlatList formPData={formData} />
    </View>
  );
};

export default CustomScrollView;
