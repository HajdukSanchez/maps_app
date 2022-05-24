import React from 'react';
import { View } from 'react-native';

import { styles } from './MapScreen.styles';
import { Map } from '../../components';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Map />
    </View>
  );
};

export { MapScreen };
