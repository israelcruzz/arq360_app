import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardProjectArea: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 16,
    gap: 12
  },
  cardProjectAreaImage: {
    borderRadius: 12,
    width: '100%',
    height: 120,
    objectFit: 'cover'
  },
  cardProjectTextArea: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  cardProjectHeadingText: {
    fontSize: 16,
    color: "#000000",
    fontWeight: 'medium'
  },
  cardProjectDetailsText: {
    fontSize: 14,
    color: "#666666",
    fontWeight: 'light'
  }
})