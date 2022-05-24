import React from 'react';
import { Text, StyleProp, ViewStyle, TouchableOpacity, TextStyle } from 'react-native';

import { styles } from './BlackButton.styles';

interface BlackButtonProps {
  text: string;
  onPress: () => void;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const BlackButton = ({ text, containerStyle, textStyle, onPress }: BlackButtonProps) => {
  return (
    <TouchableOpacity style={{ ...styles.button, ...(containerStyle as any) }} onPress={onPress}>
      <Text style={{ ...styles.buttonText, ...(textStyle as any) }}>{text}</Text>
    </TouchableOpacity>
  );
};

export { BlackButton };
