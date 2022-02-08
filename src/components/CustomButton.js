import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

TouchableOpacity.defaultProps = {activeOpacity: 0.8};

const CustomButton = ({onPress, title, backgroundColor}) => (
  <TouchableOpacity
    onPress={onPress}
    style={StyleSheet.flatten([
      styles.customButtonContainer,
      backgroundColor && {backgroundColor},
    ])}>
    <Text style={styles.customButtonText}>{title}</Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  customButtonContainer: {
    elevation: 8,
    backgroundColor: '#000000',
    borderColor:'#ffffff',
    borderWidth:2,
    borderRadius: 20,
    paddingVertical: 5,
    marginTop:5,
    paddingHorizontal: 5,
    width: '85%',
  },
  customButtonText: {
    fontSize: 18,
    color: '#fff',
    alignSelf: 'center',
  },
});

export default CustomButton;
