import { useEffect, useRef, useState } from 'react';

import Geolocation from '@react-native-community/geolocation';

import { Location } from '../../models/location.model';

const useLocation = () => {
  const [hasLocation, setHasLocation] = useState<boolean>(false); // To know if we have the user location
  const [initialPosition, setInitialPosition] = useState<Location>({} as Location);
  const [userLocation, setUserLocation] = useState<Location>({} as Location);
  const [routeLines, setRouteLines] = useState<Location[]>([]);
  const watchId = useRef<number>();

  useEffect(() => {
    getCurrentLocation().then(location => {
      setInitialPosition(location);
      setUserLocation(location);
      setRouteLines(previusRoutes => [...previusRoutes, location]);
      setHasLocation(true);
    });
  }, []);

  const getCurrentLocation = (): Promise<Location> => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          resolve({
            latitude,
            longitude,
          });
        },
        error => reject({ error }),
        {
          enableHighAccuracy: true,
        },
      );
    });
  };

  const followUserLocation = () => {
    watchId.current = Geolocation.watchPosition(
      ({ coords: { latitude, longitude } }) => {
        setUserLocation({ latitude, longitude });
        setRouteLines(previusRoutes => [...previusRoutes, { longitude, latitude }]);
      },
      error => console.log({ error }),
      {
        enableHighAccuracy: true,
        distanceFilter: 5, // 5 meters
      },
    );
  };

  const stopFollowingUserLocation = () => {
    if (watchId.current) Geolocation.clearWatch(watchId.current);
  };

  return {
    routeLines,
    hasLocation,
    userLocation,
    initialPosition,
    getCurrentLocation,
    followUserLocation,
    stopFollowingUserLocation,
  };
};

export { useLocation };
