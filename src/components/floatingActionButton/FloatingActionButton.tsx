import React from 'react';
import { View, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './FloatingActionButton.styles';

interface FloatingActionButtonProps {
  iconName: string;
  iconSize?: number;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const FloatingActionButton = ({ iconName, iconSize = 25, style, onPress }: FloatingActionButtonProps) => {
  return (
    <View style={{ ...styles.container, ...(style as any) }}>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.button}>
        <Icon name={iconName} color={'white'} size={iconSize} />
      </TouchableOpacity>
    </View>
  );
};

export { FloatingActionButton };
