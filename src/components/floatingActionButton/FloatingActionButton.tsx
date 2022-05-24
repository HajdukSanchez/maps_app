import React from 'react';
import { View, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './FloatingActionButton.styles';

interface FloatingActionButtonProps {
  iconName: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const FloatingActionButton = ({ iconName, style, onPress }: FloatingActionButtonProps) => {
  return (
    <View style={{ ...styles.container,...(style as any) }}>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.button}>
        <Icon name={iconName} color={'black'} size={35} />
      </TouchableOpacity>
    </View>
  );
};

export { FloatingActionButton };
