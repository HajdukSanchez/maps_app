import React from 'react';
import { View } from 'react-native';

import { styles } from './MapScreen.styles';
import { FloatingActionButton, Map } from '../../components';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Map />
      <FloatingActionButton iconName="star-outline" onPress={() => console.log('asas')} style={{ bottom: 20, right: 20 }} />
    </View>
  );
};

export { MapScreen };
