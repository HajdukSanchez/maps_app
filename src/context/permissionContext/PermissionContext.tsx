import React, { createContext, ReactNode, useState } from 'react';
import { Platform } from 'react-native';

import { PERMISSIONS, PermissionStatus, request } from 'react-native-permissions';

import { PermissionsState, PermissionsContextProps } from '../../models/permissions.model';

interface PermissionsProviderProps {
  children: ReactNode | ReactNode[];
}

const permissionsInitialState: PermissionsState = {
  locationStatus: 'unavailable',
};

export const PermissionsContext = createContext({} as PermissionsContextProps);

const PermissionsProvider = ({ children }: PermissionsProviderProps) => {
  const [permissions, setPermissions] = useState<PermissionsState>(permissionsInitialState);

  const askLocationPermission = async () => {
    let permissionStatus: PermissionStatus;
    if (Platform.OS === 'ios') {
      permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    }
    setPermissions({ ...permissions, locationStatus: permissionStatus });
  };

  const checkLocationPermission = () => {};

  const returnValue: PermissionsContextProps = {
    permissions,
    askLocationPermission,
    checkLocationPermission,
  };

  return <PermissionsContext.Provider value={returnValue}>{children}</PermissionsContext.Provider>;
};

export { PermissionsProvider };
