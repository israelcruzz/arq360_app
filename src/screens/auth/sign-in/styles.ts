import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  headerArea: {
    gap: 4,
    marginBottom: 24
  },
  error: {
    color: 'red',
    paddingVertical: 4,
  },
  inputsArea: {
    gap: 24
  },
  dontHaveAccountArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 12
  },
  textDontHaveAccount: {
    fontSize: 16
  },
  submitArea: {
    marginTop: 24
  },
  forgotPasswordText: {
    alignItems: 'flex-end',
    marginTop: 8
  }
});
