import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: "#FFFFFF"
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
  buttonsArea: {
    gap: 12
  },
  optButton: {
    width: 64,
    height: 64,
    borderWidth: 1,
    borderColor: '#D1D1D1',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },
  otpArea: {
    flexDirection: 'row',
    gap: 20
  },
  resendText: {
    fontSize: 16,
    color: '#696969',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  timerText: {
    fontSize: 16,
    color: '#9D9D9D'
  }
})