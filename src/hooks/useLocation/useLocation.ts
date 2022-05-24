import { useEffect, useState } from 'react';

import Geolocation from '@react-native-community/geolocation';

import { Location } from '../../models/location.model';

const useLocation = () => {
  const [hasLocation, setHasLocation] = useState<boolean>(false); // To know if we have the user location
  const [initialPosition, setInitialPosition] = useState<Location>({} as Location);

  useEffect(() => {
    getCurrentLocation().then(location => {
      setInitialPosition(location);
      setHasLocation(true);
    });
  }, []);

  const getCurrentLocation = (): Promise<Location> => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        ({ coords }) => {
          resolve({
            latitude: coords.latitude,
            longitude: coords.longitude,
          });
        },
        error => reject({ error }),
        {
          enableHighAccuracy: true,
        },
      );
    });
  };

  return {
    hasLocation,
    initialPosition,
    getCurrentLocation,
  };
};

export { useLocation };
