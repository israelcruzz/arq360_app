import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    flex: 1,
    justifyContent: 'space-between'
  },
  headerArea: {},
  textHeaderArea: {
    gap: 4,
    marginBottom: 24,
    marginTop: 24
  },
  backButton: {
    borderWidth: 1,
    borderColor: '#E8ECF4',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40
  },
  error: {
    color: 'red',
    paddingVertical: 4,
  },
  inputsArea: {
    gap: 24
  },
})