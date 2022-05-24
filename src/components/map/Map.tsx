import React from 'react';
import { View } from 'react-native';

import MapView from 'react-native-maps';

import { styles } from './Map.styles';
import { useLocation } from '../../hooks';
import { LoadingScreen } from '../../screens';

const Map = () => {
  const {
    hasLocation,
    initialPosition: { latitude, longitude },
  } = useLocation();

  return hasLocation ? (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        showsUserLocation
        showsMyLocationButton={false}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}></MapView>
    </View>
  ) : (
    <LoadingScreen />
  );
};

export { Map };
