import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';

import MapView, { Polyline } from 'react-native-maps';

import { styles } from './Map.styles';
import { useLocation } from '../../hooks';
import { FloatingActionButton } from '../';
import { LoadingScreen } from '../../screens';
import { Location } from '../../models/location.model';

const Map = () => {
  const mapViewRef = useRef<MapView>();
  const following = useRef<boolean>(true);
  const [showPolylines, setshowPolylines] = useState<boolean>(true);
  const { hasLocation, userLocation, initialPosition, routeLines, getCurrentLocation, followUserLocation, stopFollowingUserLocation } = useLocation();

  useEffect(() => {
    followUserLocation();
    return () => {
      stopFollowingUserLocation();
    };
  }, []);

  useEffect(() => {
    if (!following.current) return; // Don't update map if user is not following
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
    following.current = true; // Reset following
    centerCamera({ latitude, longitude });
  };

  const handleTouchMap = () => {
    following.current = false;
  };

  const handleShowPolylines = () => {
    setshowPolylines(!showPolylines);
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
        onTouchStart={handleTouchMap}>
        {showPolylines && <Polyline coordinates={routeLines} strokeColor={'black'} strokeWidth={3} />}
      </MapView>
      <FloatingActionButton iconName="locate-outline" onPress={handleCenterCamera} style={{ bottom: 20, right: 20 }} iconSize={30} />
      <FloatingActionButton
        iconName={!showPolylines ? 'pencil-outline' : 'alert-outline'}
        onPress={handleShowPolylines}
        style={{ bottom: 80, right: 20 }}
      />
    </View>
  ) : (
    <LoadingScreen />
  );
};

export { Map };
