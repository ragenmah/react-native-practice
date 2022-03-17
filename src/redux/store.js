import { createStore,applyMiddleware} from 'redux';
import rootReducer from './reducers';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


const middlewares = [thunk, logger]

const store = createStore(rootReducer, applyMiddleware(thunk,logger));

export default store;
export const persistor = persistStore(store);
