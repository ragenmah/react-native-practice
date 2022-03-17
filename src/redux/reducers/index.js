import { combineReducers } from "redux";
import {  persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import counterReducers from "./counterReducers"
import todoReducers from "./todoReducers";
import gitUserReducer from "./gitUserReducer";

const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
};

const rootReducer = combineReducers({
  counterReducers:counterReducers,
  gitUser:gitUserReducer,
  todoReducers: persistReducer(persistConfig, todoReducers),
});
  
export default rootReducer