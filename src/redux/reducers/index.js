import { combineReducers } from "redux";
import counterReducers from "./counterReducers"

const rootReducer = combineReducers({
    counterReducers:counterReducers,
  });
  
export default rootReducer