import React from 'react';

import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import { RootStackParamList } from '../routes/routes';
import { LoadingScreen, MapScreen, PermissionScreen } from '../screens';

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Navigator initialRouteName="Permission" screenOptions={_screenOptions}>
      <Screen name="Loading" component={LoadingScreen} />
      <Screen name="Permission" component={PermissionScreen} />
      <Screen name="Map" component={MapScreen} />
    </Navigator>
  );
};

const _screenOptions: StackNavigationOptions = {
  headerShown: false,
};

export { StackNavigator };
