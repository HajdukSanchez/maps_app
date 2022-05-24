import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
  },
});
