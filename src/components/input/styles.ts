import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  inputArea: {
    borderWidth: 1,
    borderColor: '#D1D1D1',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 4,
  },
  textInput: {
    flex: 1,
  },
  inputError: {
    borderColor: '#ff0000'
  }
});
