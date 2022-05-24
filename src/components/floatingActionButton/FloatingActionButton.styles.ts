import { StyleSheet } from 'react-native';
import { globalStyles } from '../../themes/appTheme';

export const styles = StyleSheet.create({
  container: {
    ...globalStyles.shadow,
    position: 'absolute',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: 'black',
    borderRadius: 100,
    elevation: 1,
    zIndex: 10000,
  },
});
