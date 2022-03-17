import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import GitUsersRepo from './gitusers/GitUsersRepo';
import GitUsersScreen from './gitusers/GitUsersScreen';
import MainNav from './routes/MainNav';
import { CounterScreen } from './screens';
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
      />
      <Stack.Screen name="ToDos" component={MainNav} />
      <Stack.Screen name="githubUsers" component={GitUsersScreen} />
      <Stack.Screen name="counterApp" component={CounterScreen} />
      <Stack.Screen name="githubUsersRepos" component={GitUsersRepo} />
      
    </Stack.Navigator>
  );
};

export default MainApp;
