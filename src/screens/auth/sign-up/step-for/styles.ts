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
  buttonsArea: {
    gap: 12
  },
  image: {
    borderRadius: 999,
    borderWidth: 2,
    borderColor: '#000',
  },
  buttonUpload: {
    width: 40,
    height: 40,
    backgroundColor: '#000',
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  photoImage: {
    marginTop: 24,
    alignSelf: 'center',
    width: 156,
    height: 156,
  },
  subscriptionArea: {
    gap: 24
  },
  subscriptionCardArea: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: '#D7DEEA',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12
  },
  subscriptionCardAreaActive: {
    borderWidth: 1,
    borderColor: '#725D4D',
    backgroundColor: 'rgba(114, 93, 77, 0.1)'
  },
  subscriptionCheckbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#DFE1E7',
    borderRadius: 999
  },
  subscriptionCheckboxActive: {
    borderWidth: 6,
    borderColor: '#725D4D',
  },
  subscriptionHeadingText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000'
  },
  subscriptionDescriptionText: {
    fontWeight: 'medium',
    fontSize: 18,
    color: '#707F8F'
  }
})