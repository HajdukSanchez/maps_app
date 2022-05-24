import React, { useContext } from 'react';

import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import { RootStackParamList } from '../routes/routes';
import { LoadingScreen, MapScreen, PermissionScreen } from '../screens';
import { PermissionsContext } from '../context/permissionContext/PermissionContext';

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  const {
    permissions: { locationStatus },
  } = useContext(PermissionsContext);

  if (locationStatus === 'unavailable') return <LoadingScreen />;

  return (
    <Navigator initialRouteName="Permission" screenOptions={_screenOptions}>
      {locationStatus === 'granted' ? <Screen name="Map" component={MapScreen} /> : <Screen name="Permission" component={PermissionScreen} />}
    </Navigator>
  );
};

const _screenOptions: StackNavigationOptions = {
  headerShown: false,
};

export { StackNavigator };
