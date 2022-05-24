import { useEffect, useState } from 'react';

import Geolocation from '@react-native-community/geolocation';

import { Location } from '../../models/location.model';

const useLocation = () => {
  const [hasLocation, setHasLocation] = useState<boolean>(false); // To know if we have the user location
  const [initialPosition, setInitialPosition] = useState<Location>({} as Location);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      ({ coords }) => {
        setInitialPosition({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
        setHasLocation(true);
      },
      error => console.log(error),
      {
        enableHighAccuracy: true,
      },
    );
  }, []);

  return {
    hasLocation,
    initialPosition,
  };
};

export { useLocation };
