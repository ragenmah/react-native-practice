import createAsyncStorage from 'redux-persist-react-native-async-storage';
import { createStore} from 'redux';

import rootReducer from './reducers';


const storage = createAsyncStorage();

const config = {
    key: 'root',
    storage
  };
  
const store = createStore(rootReducer);

export default store;
