import { createStore,applyMiddleware} from 'redux';
import rootReducer from './reducers';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
export const persistor = persistStore(store);
