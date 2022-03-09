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
    // let items = Array.apply(null, Array(20)).map((v, i) => {
    //   return { id: i, src: 'https://i.pravatar.cc/150?img=' + (i + 1) };
    // });
    let items = [
      {
        id: 1,
        image_src:
          'https://cdn3.iconfinder.com/data/icons/inficons/512/github.png',
        project_name: 'Github Users',
        route_name:'githubUsers'
      },
      {
        id: 2,
        image_src:
          'https://softwarelist.oregonstate.edu/sites/softwarelist.oregonstate.edu/files/styles/software_image/public/software/microsoft_todo.png?itok=eymk9NbD',
        project_name: 'Todo',
        route_name:'ToDos'
      },
    ];
    setDataSource(items);
  }, []);

  const renderItem=({item}) => (
    <View style={{flex: 1, flexDirection: 'column', margin: 1}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(item.route_name);
        }}>
        <Image
          style={styles.imageThumbnail}
          source={{uri: item.image_src}}
        />
        <Text style={styles.projectName}>{item.project_name}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dataSource}
        renderItem={renderItem}
        numColumns={3}
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
    fontSize: 18,
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // height: '100%',
    top: 120,
    left: 10,
  },
  
});
