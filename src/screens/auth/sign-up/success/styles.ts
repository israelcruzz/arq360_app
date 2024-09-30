import { Dimensions, StyleSheet } from "react-native"

const dimen = Dimensions.get("screen")

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: "#FFFFFF"
  },
  textArea: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 48
  },
  textHeaderArea: {
    gap: 4,
    marginBottom: 24,
    marginTop: 24
  },
  buttonsArea: {
    gap: 12
  },
  image: {
    width: dimen.width - 110,
    height: dimen.height - 600,
    objectFit: "cover",
    alignSelf: "center"
  },
  textHeadingSuccess: {
    color: "#1E232C",
    fontWeight: "bold",
    fontSize: 24 + 8,
    textAlign: "center",
    marginBottom: 12
  },
  textDescriptionSuccess: {
    color: "#8391A1",
    fontWeight: "medium",
    fontSize: 16,
    textAlign: "center",
  }
})