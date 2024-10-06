import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    backgroundColor: "#FFFFFF"
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 9999,
    objectFit: 'cover',
  },
  contentTextArea: {
    paddingHorizontal: 24,
    marginTop: 24
  },
  headingTextArea: {
    marginTop: 24,
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#000000',
  },
  headingText: {
    color: '#000000',
    fontWeight: 'medium',
    fontSize: 24
  },
  seeAllText: {
    fontSize: 14
  }
});