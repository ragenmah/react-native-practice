import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Calculator from './src/Calculator';
import ScrollViewApp from './src/ScrollViewApp';
import {TodoScreen} from './src/screens';
import MainNav from './src/routes/MainNav';
import DataProvider from './src/DataProvider';

const App = () => {
  return (
    <DataProvider>
      <NavigationContainer>
        <MainNav />
      </NavigationContainer>
    </DataProvider>
  );
};

export default App;
