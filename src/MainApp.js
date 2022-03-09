import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import GitUsersScreen from './gitusers/GitUsersScreen';
import MainNav from './routes/MainNav';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

const MainApp = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        //   options={{ title: 'Welcome' }}
      />
      <Stack.Screen name="ToDos" component={MainNav} />
      <Stack.Screen name="githubUsers" component={GitUsersScreen} />
    </Stack.Navigator>
  );
};

export default MainApp;
