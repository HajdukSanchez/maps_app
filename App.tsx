import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { StackNavigator } from './src/navigator/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export { App };
