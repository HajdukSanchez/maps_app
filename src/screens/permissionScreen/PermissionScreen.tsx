import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';

import { styles } from './PermissionScreen.styles';
import { PermissionsContext } from '../../context/permissionContext/PermissionContext';

const PermissionScreen = () => {
  const { permissions, askLocationPermission } = useContext(PermissionsContext);

  const handleLocationPermission = () => {
    askLocationPermission();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enable permissions to your Location</Text>
      <Button title="Request permission" onPress={handleLocationPermission} />
      {/* <Text style={styles.text}>{JSON.stringify(permissions, null, 5)}</Text> */}
    </View>
  );
};

export { PermissionScreen };
