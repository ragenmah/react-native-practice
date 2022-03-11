import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {Badge} from 'react-native-elements';

const GitUsersRepo = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const route = useRoute();
  const name = route.params.userName;

  useEffect(() => {
    getRepoList();
  }, []);

  const getRepoList = async () => {
    setLoading(true);
    try {
      const {data} = await axios.get(
        `https://api.github.com/users/${name}/repos`,
      );
      setRepos(data);
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again');
    }
    setLoading(false);
  };

  const renderItem = ({item}) => (
    <View style={styles.cardContainer}>
      <Text style={styles.headerText}>{item.name}</Text>

      <Text style={styles.textStyle}>
        Language used: {item.language || 'N/A'}
      </Text>

      <Text style={styles.textStyle}>
        Open Issues: {item.open_issues_count || 'N/A'}
      </Text>

      <Text style={styles.dateStyle}>
        <Badge
          status="success"
          value={moment(item.created_at).format('MMM DD, YYYY')}
        />
      </Text>
    </View>
  );

  const emptyView = () => (
    <View>
      <Text>No Repo found for this user.</Text>
    </View>
  );
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {isLoading ? (
        <ActivityIndicator size={'large'} color="#222" />
      ) : (
        <View style={styles.flatListStyle}>
          <Text style={styles.userNameStyle}>{name}'s Repo</Text>

          <FlatList
            // contentContainerStyle=
            data={repos || []}
            renderItem={renderItem}
            ListEmptyComponent={emptyView}
          />
        </View>
      )}
    </View>
  );
};

export default GitUsersRepo;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 10,
    padding: 5,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    padding: 5,
    borderBottomColor: '#000',
    elevation: 2,
  },
  textStyle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#121212',
    marginBottom: 5,
  },
  flatListStyle: {
    height: '100%',
  },
  userNameStyle: {
    left: 10,
    padding: 10,
    fontSize: 20,
    color: '#121212',
    textTransform: 'capitalize',
  },
  headerText: {
    backgroundColor: '#2089dc',
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 5,
    marginBottom: 10,
    fontSize: 16,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    textTransform: 'capitalize',
  },
});
