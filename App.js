import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Calculator from './src/Calculator';
import ScrollViewApp from './src/ScrollViewApp';
import { TodoScreen } from './src/screens';
import MainNav from './src/routes/MainNav';

const App = () => {
  return (
    <NavigationContainer>

    <MainNav/>
    </NavigationContainer>
    )

};

export default App;
