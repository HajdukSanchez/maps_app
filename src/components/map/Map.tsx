import React, { useRef } from 'react';
import { View } from 'react-native';

import MapView from 'react-native-maps';

import { styles } from './Map.styles';
import { useLocation } from '../../hooks';
import { FloatingActionButton } from '../';
import { LoadingScreen } from '../../screens';

const Map = () => {
  const mapViewRef = useRef<MapView>();
  const {
    hasLocation,
    initialPosition: { latitude, longitude },
    getCurrentLocation,
  } = useLocation();

  const centerCamera = async () => {
    const { latitude, longitude } = await getCurrentLocation();

    mapViewRef.current?.animateCamera({
      center: {
        latitude,
        longitude,
      },
			zoom: 15,
    });
  };

  return hasLocation ? (
    <View style={styles.container}>
      <MapView
        ref={element => (mapViewRef.current = element!)}
        style={styles.map}
        showsUserLocation
        showsMyLocationButton={false}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <FloatingActionButton iconName="locate-outline" onPress={centerCamera} style={{ bottom: 20, right: 20 }} />
    </View>
  ) : (
    <LoadingScreen />
  );
};

export { Map };
