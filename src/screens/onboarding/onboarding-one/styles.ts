import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    maxWidth: '100%',
    width: '100%',
    marginBottom: 24,
    borderBottomLeftRadius: 64,
    borderBottomRightRadius: 64, 
  },
  contentArea: {
    paddingHorizontal: 40,
  },
  textArea: {
    gap: 12,
  },
  navigateButtonsArea: {
    flexDirection: 'row',
    gap: 3,
    marginTop: 16,
  },
  navigateButtonActive: {
    borderRadius: 999,
    width: 40,
    height: 6,
    backgroundColor: '#272727',
  },
  navigateButtonDesactive: {
    borderRadius: 999,
    width: 40,
    height: 6,
    backgroundColor: '#828282',
  },
  headerText: {
    color: '#414D54',
    fontSize: 32,
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#7D94A0',
  },
  buttonsArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  linkText: {
    color: '#7D94A0',
    fontSize: 16,
    fontWeight: '500',
  },
  nextButton: {
    backgroundColor: '#272727',
    padding: 12,
    borderRadius: 999,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});
