import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: "#FFFFFF"
  },
  textHeaderArea: {
    gap: 4,
    marginBottom: 24,
    marginTop: 24
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#DFE1E7',
    borderRadius: 999
  },
  checkboxActive: {
    borderWidth: 6,
    borderColor: '#725D4D',
  },
  checkboxArea: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  checkboxText: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'medium'
  },
  themeAreaCheckbox: {
    gap: 12
  },
  textStyleDark: {
    color: '#FFFFFF'
  },
  textStyleLight: {
    color: '#000000'
  }
})