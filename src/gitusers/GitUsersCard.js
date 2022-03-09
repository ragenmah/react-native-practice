import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFont from 'react-native-vector-icons/FontAwesome5';

const GitUsersCard = ({users}) => {
  const foundUser = () => {
   return <View>
      <Image style={styles.imageThumbnail} source={{uri: users.avatar_url}} />
      <Text style={styles.loginName}>
        <View style={styles.roundButton}>
          <IconFont name="user-alt" color={'#000'} size={10} />
        </View>
        {users.login}
      </Text>
      <Text style={styles.loginName}>
        <View style={styles.roundButton}>
          <IconFont name="user-tie" color={'#000'} size={10} />
        </View>
        {users.name}
      </Text>
      <Text style={styles.loginName}>
        <View style={styles.roundButton}>
          <IconFont name="user-check" color={'#000'} size={10} />
        </View>
        {users.followers}
      </Text>
      <Text style={styles.loginName}>
        <View style={styles.roundButton}>
          <IconFont name="user-minus" color={'#000'} size={10} />
        </View>
        {users.following}
      </Text>
      <Text style={styles.loginName}>
        <View style={styles.roundButton}>
          <IconFont name="business-time" color={'#000'} size={10} />
        </View>
        {users.created_at}
      </Text>
    </View>;
  };

  const notFoundUser = () => {
   return <View>
      <Image
        style={styles.imageThumbnail}
        source={{
          uri: 'https://img-16.ccm2.net/_SqzzXVDSG50FWb_UBrCl3XwV78=/440x/1685e17045e747a899925aa16189c7c6/ccm-encyclopedia/99776312_s.jpg',
        }}
      />
      <Text style={styles.loginName}>
        
        Sorry, User not found
      </Text>
    </View>;
  };
  return (
    <View style={styles.cardContainer}>
      {users.message === 'Not Found' ? notFoundUser() : foundUser()}
    </View>
  );
};

export default GitUsersCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#f2f2f2',
    width: '95%',
    alignSelf: 'center',
    borderRadius: 20,
    position: 'relative',
    padding: 20,
    margin: 20,
  },
  imageThumbnail: {
    alignSelf: 'center',
    height: 120,
    width: 120,
    position: 'relative',
    borderRadius: 100,
  },
  roundButton: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginRight: 5,
    borderRadius: 100,
    backgroundColor: 'white',
    bottom: 0,
    position: 'relative',
  },
  loginName: {
    //   flex:1,
    //   justifyContent:'space-around',
    alignItems: 'center',
    //   flexDirection:'column'
    fontSize: 16,
  },
});
