import React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, Text, Image} from 'react-native';

import CustomButton from './CustomButton';
import {CommonStyles, Images} from '../constants';

const CustomFlatList = ({formPData}) => {
  const [users, setUsers] = useState(formPData);

  useEffect(() => {
    setUsers(formPData);
  }, [formPData]);

  const clearAllUsers = () => {
    setUsers([]);
    formPData.splice(0, formPData.length);
  };

  const renderItem = ({item}) => {
    return (
      <View style={[STYLE.listItem, CommonStyles.flexRow]}>
        <Image source={Images.userImage} style={STYLE.userImage} />

        <View style={CommonStyles.p10}>
          <Text style={STYLE.text}>
            Name: {item?.firstName} {item?.lastName}
          </Text>

          <Text style={STYLE.text}>Age: {item?.age}</Text>

          <Text style={STYLE.text}>Email: {item?.email}</Text>
        </View>
      </View>
    );
  };

  const ListHeader = () => {
    return (
      <Text
        style={CommonStyles.headerText}>{`ALL USERS (${users?.length})`}</Text>
    );
  };

  const ListFooter = () => {
    return (
      <View style={STYLE.btnStyle}>
        <CustomButton onPress={clearAllUsers} title="Remove All Users" />
      </View>
    );
  };

  return (
    <FlatList
      data={users}
      style={[CommonStyles.dFlex]}
      // horizontal
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderItem}
      ListHeaderComponent={ListHeader}
      ListFooterComponent={ListFooter}
    />
  );
};

const STYLE = StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'purple',
  },
  listItem: {
    borderBottomWidth: 1,
    padding: 5,
    borderBottomColor: 'purple',
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 100,
    alignSelf: 'center',
  },
  btnStyle: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
});

export default CustomFlatList;
