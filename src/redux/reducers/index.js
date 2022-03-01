import { combineReducers } from "redux";
import {  persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import counterReducers from "./counterReducers"
import todoReducers from "./todoReducers";

const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
  whitelist: ['todo']
};

const rootReducer = combineReducers({
  counterReducers:counterReducers,
  todoReducers: persistReducer(persistConfig, todoReducers),
});
  
export default rootReducer