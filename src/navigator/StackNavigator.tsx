import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens';
import { RootStackParamList } from '../routes/routes';

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  );
};

export { StackNavigator };
