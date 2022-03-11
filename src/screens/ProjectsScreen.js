import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

const ProjectsScreen = ({navigation}) => {
  const [dataSource, setDataSource] = useState([]);

  useState(() => {
    let items = [
      {
        id: 1,
        image_src:
          'https://cdn3.iconfinder.com/data/icons/inficons/512/github.png',
        project_name: 'Github Users',
        route_name: 'githubUsers',
      },
      {
        id: 2,
        image_src:
          'https://softwarelist.oregonstate.edu/sites/softwarelist.oregonstate.edu/files/styles/software_image/public/software/microsoft_todo.png?itok=eymk9NbD',
        project_name: 'Todo',
        route_name: 'ToDos',
      },
      {
        id: 3,
        image_src:
          'https://lh3.googleusercontent.com/eihOnAELz57V4Doin9f1-v7JvU9rYltkFKXTpxRzYjSlV2wiRWoyq9g1JdPCum6x3w=s180-rw',
        project_name: 'Simple Counter',
        route_name: 'counterApp',
      },
      // {
      //   id: 4,
      //   image_src:
      //     'https://assets.nintendo.com/image/upload/c_fill,dpr_3.0,f_auto,q_auto,w_400/b_transparent/v1/ncom/en_US/games/switch/c/calculator-switch/description-image',
      //   project_name: 'Simple Counter',
      //   route_name: 'counterApp',
      // },
    ];
    setDataSource(items);
  }, []);

  const renderItem = ({item}) => (
    <View style={{flex: 1, flexDirection: 'column', margin: 1}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(item.route_name);
        }}>
        <Image style={styles.imageThumbnail} source={{uri: item.image_src}} />
        <Text style={styles.projectName}>{item.project_name}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dataSource}
        renderItem={renderItem}
        numColumns={dataSource.length % 2 === 0 ? 2 : 3}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
};
export default ProjectsScreen;

const styles = StyleSheet.create({
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    position: 'relative',
  },

  projectName: {
    position: 'absolute',
    color: '#fff',
    fontSize: 16,
    top: 120,
    left: 10,
  },
});
