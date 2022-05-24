import React from 'react';
import { Button, Platform, Text, View } from 'react-native';

import { check, PERMISSIONS, PermissionStatus, request } from 'react-native-permissions';

import { styles } from './PermissionScreen.styles';

const PermissionScreen = () => {
  const handleLocationPermission = async () => {
    let permissionStatus: PermissionStatus;
    if (Platform.OS === 'ios') {
      permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <Button title="Request permission" onPress={handleLocationPermission} />
    </View>
  );
};

export { PermissionScreen };
