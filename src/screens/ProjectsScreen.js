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
          'data:image/png;base64,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',
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
