import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { styles } from './LoadingScreen.styles';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={'black'} size={35} />
    </View>
  );
};

export { LoadingScreen };
