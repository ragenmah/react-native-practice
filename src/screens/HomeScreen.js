import React from 'react'
import { SafeAreaView, StyleSheet, Text, View} from 'react-native';

import ProjectsScreen from '../screens/ProjectsScreen';

const HomeScreen = ({ navigation }) => {
  return (<SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.heading}>Hello Welcome!</Text>
      <Text style={styles.heading}>Select projects</Text>
    </View>
    <ProjectsScreen navigation={navigation}/>
  </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {flex:1, backgroundColor: '#2f3030'},
    header: {
      height: '20%',
      backgroundColor: '#111212',
      padding:"10%",
    },
    heading: {
      color: '#f2f2f2',
      fontSize: 24,
      alignSelf: 'center',
      // top:20
      // height:'100%'
    },
  });