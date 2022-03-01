import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TodoDoneScreen, TodoScreen } from '../screens';
import { useSelector } from 'react-redux';


const Tab = createBottomTabNavigator();

const MainNav=() =>{
  const {todoReducers} = useSelector(state => state);
 
  return (
    <Tab.Navigator
      initialRouteName="ToDO"
      screenOptions={{
        tabBarActiveTintColor: '#f2f2f2',
        tabBarActiveBackgroundColor: '#3d3c3c',
        tabBarInactiveBackgroundColor:'#3d3c3c',
        headerShown: false        
      }}
    
      >
      <Tab.Screen
        name="ToDo"
        component={TodoScreen}
        options={{
          tabBarLabel: 'Todo',
          tabBarIcon: ({color}) => (
            <Icon name="checkbox-marked-circle-outline" color={color} size={26} />
          ),
          tabBarBadge: todoReducers.newTodo.length,
          tabBarBadgeStyle: { backgroundColor: 'grey',color:"#ffffff" }
        }}
      />

      <Tab.Screen
        name="ToDo "
        component={TodoDoneScreen}
        options={{
          tabBarLabel: 'Done',
          tabBarIcon: ({color, size}) => (
            <Icon name="check-all" color={color} size={26} />
          ),
          tabBarBadge:  todoReducers.doneTodo.length,
          tabBarBadgeStyle: { backgroundColor: 'grey',color:"#ffffff" }
        }}
      />
    </Tab.Navigator>
  );
}
export default MainNav;
