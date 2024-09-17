import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  clientArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12
  },
  clientAreaHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12
  },
  clientNameText: {
    fontWeight: 'semibold',
    fontSize: 16,
    color: "#000000"
  },
  clientRemoveButton: {
    backgroundColor: '#FEE9E9',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  clientRemoveTextButton: {
    color: "#DF4040",
    fontWeight: 'semibold',
    fontSize: 16
  },
  avatar: {
    borderRadius: 999,
    objectFit: 'cover'
  }
})