import React, { createContext, ReactNode, useState } from 'react';

import { PermissionsState, PermissionsContextProps } from '../../models/permissions.model';

interface PermissionsProviderProps {
  children: ReactNode | ReactNode[];
}

const permissionsInitialState: PermissionsState = {
  locationStatus: 'unavailable',
};

const PermissionsContext = createContext({} as PermissionsContextProps);

const PermissionsProvider = ({ children }: PermissionsProviderProps) => {
  const [permissions, setPermissions] = useState<PermissionsState>(permissionsInitialState);

  const askLocationPermission = () => {};

  const checkLocationPermission = () => {};

  const returnValue: PermissionsContextProps = {
    permissions,
    askLocationPermission,
    checkLocationPermission,
  };

  return <PermissionsContext.Provider value={returnValue}>{children}</PermissionsContext.Provider>;
};

export { PermissionsProvider };
