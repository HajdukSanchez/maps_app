import { StyleSheet } from 'react-native';
import { globalStyles } from '../../themes/appTheme';

export const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 50,
    backgroundColor: 'black',
    elevation: 6,
    ...globalStyles.shadow,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});
