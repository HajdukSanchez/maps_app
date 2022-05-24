import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';

import MapView from 'react-native-maps';

import { styles } from './Map.styles';
import { useLocation } from '../../hooks';
import { FloatingActionButton } from '../';
import { LoadingScreen } from '../../screens';
import { Location } from '../../models/location.model';

const Map = () => {
  const mapViewRef = useRef<MapView>();
  const { hasLocation, userLocation, initialPosition, getCurrentLocation, followUserLocation } = useLocation();

  useEffect(() => {
    followUserLocation();
    return () => {};
  }, []);

  useEffect(() => {
    centerCamera(userLocation);
  }, [userLocation]);

  const centerCamera = ({ latitude, longitude }: Location) => {
    mapViewRef.current?.animateCamera({
      center: {
        latitude,
        longitude,
      },
      zoom: 15,
    });
  };

  const handleCenterCamera = async () => {
    const { latitude, longitude } = await getCurrentLocation();
    centerCamera({ latitude, longitude });
  };

  return hasLocation ? (
    <View style={styles.container}>
      <MapView
        ref={element => (mapViewRef.current = element!)}
        style={styles.map}
        showsUserLocation
        showsMyLocationButton={false}
        initialRegion={{
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <FloatingActionButton iconName="locate-outline" onPress={handleCenterCamera} style={{ bottom: 20, right: 20 }} />
    </View>
  ) : (
    <LoadingScreen />
  );
};

export { Map };
