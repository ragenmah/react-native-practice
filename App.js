import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import MainApp from './src/MainApp';
import store, {persistor} from './src/redux/store';

import MainNav from './src/routes/MainNav';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
        <MainApp/>
          {/* <MainNav /> */}
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
