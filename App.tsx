import React, { ReactNode } from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { PermissionsProvider } from './src/context';
import { StackNavigator } from './src/navigator/StackNavigator';

interface AppStateProps {
  children: ReactNode | ReactNode[];
}

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'transparent'} translucent />
      <_AppState>
        <StackNavigator />
      </_AppState>
    </NavigationContainer>
  );
};

const _AppState = ({ children }: AppStateProps) => {
  return <PermissionsProvider>{children}</PermissionsProvider>;
};

export { App };
