import React from 'react';
import { Provider } from 'react-redux';
import CounterApp from './src/CounterApp';
import store from './src/redux/store';
import { CounterScreen } from './src/screens';

const App = () => {
  // return <CounterApp />;
  return <Provider store={store}>
  <CounterScreen />
</Provider>
};

export default App;
