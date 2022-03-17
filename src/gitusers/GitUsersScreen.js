import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  Keyboard,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GitUsersCard from './GitUsersCard';
import {getGitUsers} from '../redux/actions/gituserActions';

const GitUsersScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {gitUser} = useSelector(state => state);
  const getGiUser=username=> dispatch(getGitUsers(username));
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.top}>
          <Image
            style={styles.imageThumbnail}
            source={{
              uri: 'https://www.sourcecon.com/wp-content/uploads/sites/3/2017/01/github4.jpg',
            }}
          />

          <Text style={styles.searchTitle}>Search Github Users</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Write the users name"
              style={styles.input}
              placeholderTextColor="#fff"
              onChangeText={text => {
                gitUser.username=text;
              }}
              // value={username}
              maxLength={43}
            />

            <TouchableOpacity
              onPress={()=>{getGiUser(gitUser.username)}}
              style={styles.roundButton}>
              {gitUser.loading ? (
                <ActivityIndicator />
              ) : (
                <Icon name="account-search" color={'#000'} size={22} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        {gitUser.loading ? (
          <ActivityIndicator />
        ) : gitUser.users != '' && gitUser.users != null ? (
          <GitUsersCard users={gitUser.users} navigation={navigation} />
        ) : (
          <View></View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default GitUsersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f3030',
    justifyContent: 'space-between',
    // height:"100%"
  },

  top: {
    // height:100,
    flex: 1,
    justifyContent: 'space-between',
    height: 350,
  },
  inputContainer: {
    // position: 'relative',
    // top: 20,
    flexDirection: 'row',
    borderRadius: 45,
    paddingLeft: 15,
    width: '90%',
    height: 50,
    backgroundColor: '#918d8d',
    justifyContent: 'space-between',
    alignSelf: 'center',
    bottom: 10,
  },
  input: {
    color: 'white',
    fontSize: 16,
    width: '80%',
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
  imageThumbnail: {
    top: 20,
    height: 200,
    resizeMode: 'contain',
  },
  searchTitle: {
    color: '#fff',
    fontSize: 18,
    marginTop: 30,
    left: 20,
  },
});
