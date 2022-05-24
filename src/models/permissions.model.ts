import { PermissionStatus } from 'react-native-permissions';

/**
 * Model of data for permissions in the app
 */
export interface PermissionsState {
  locationStatus: PermissionStatus;
  // ... Other status
}

/**
 * Properties of my context
 */
export type PermissionsContextProps = {
  permissions: PermissionsState;
  askLocationPermission: () => void;
  checkLocationPermission: () => void;
};
