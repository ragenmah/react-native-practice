import { createStore,applyMiddleware} from 'redux';
import rootReducer from './reducers';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
export const persistor = persistStore(store);
