import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { AppState, Platform } from 'react-native';

import { check, openSettings, PERMISSIONS, PermissionStatus, request } from 'react-native-permissions';

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

  useEffect(() => {
    checkLocationPermission();
    const listener = AppState.addEventListener('change', state => {
      if (state !== 'active') return;
      checkLocationPermission();
    });
    return () => {
      listener.remove(); // remove listener
    };
  }, []);

  const askLocationPermission = async () => {
    let permissionStatus: PermissionStatus;
    if (Platform.OS === 'ios') {
      permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    }
    if (permissionStatus === 'blocked') openSettings(); // Open app settings
    setPermissions({ ...permissions, locationStatus: permissionStatus });
  };

  const checkLocationPermission = async () => {
    let permissionStatus: PermissionStatus;
    if (Platform.OS === 'ios') {
      permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    }
    setPermissions({ ...permissions, locationStatus: permissionStatus });
  };

  const returnValue: PermissionsContextProps = {
    permissions,
    askLocationPermission,
    checkLocationPermission,
  };

  return <PermissionsContext.Provider value={returnValue}>{children}</PermissionsContext.Provider>;
};

export { PermissionsProvider };
