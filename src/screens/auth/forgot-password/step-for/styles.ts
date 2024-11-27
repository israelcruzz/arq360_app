import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: "#FFFFFF"
  },
  contentArea: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
    textAlign: 'center'
  },
  textArea: {
    gap: 8,
    textAlign: 'center'
  },
  headingText: {
    color: '#1E232C',
    fontWeight: 'bold',
    fontSize: 26,
    textAlign: 'center'
  },
  descriptionText: {
    fontWeight: 'medium',
    fontSize: 14,
    color: '#8391A1',
  },
  buttonArea: {
    marginTop: 24,
    width: '100%'
  }
})