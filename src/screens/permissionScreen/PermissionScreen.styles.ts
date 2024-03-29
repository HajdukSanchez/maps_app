import { StyleSheet } from 'react-native';
import { globalStyles } from '../../themes/appTheme';

export const styles = StyleSheet.create({
  container: {
    ...globalStyles.screenContainer,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...globalStyles.text,
		fontWeight: 'bold',
		marginVertical: 10,
  },
});
