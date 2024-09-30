import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: "#FFFFFF"
  },
  imageArea: {
    width: "100%",
    height: 400,
    borderRadius: 16
  },
  imageProjectArea: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 16
  },
  headingTextImage: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF"
  },
  descriptionTextImage: {
    fontSize: 16,
    fontWeight: "semibold",
    color: "#BDBDBE"
  },
  textImageArea: {
    position: "absolute",
    bottom: 24,
    left: 24
  },
  buttonBackArea: {
    position: "absolute",
    top: 24,
    left: 24
  },
  buttonEditArea: {
    position: "absolute",
    top: 24,
    right: 24
  },
  convenientTextArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  convenientHeadingText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
  convenientDescriptionText: {
    fontSize: 16,
    fontWeight: "semibold",
    color: "#717173",
  },
  convenientArea: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D1D1D1",
    padding: 24,
    gap: 16
  },
  contentArea: {
    padding: 24
  },
  clientImage: {
    width: 48,
    height: 48,
    borderRadius: 999,
    objectFit: "cover"
  },
  clientNameText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000"
  },
  clientDetailsText: {
    fontSize: 14,
    fontWeight: "medium",
    color: "#717173"
  },
  clientAreaInfos: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  clientArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 16,
    padding: 12
  },
  clientAreaButtonMessage: {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#F4F5F6'
  },
  blockClientArea: {
    gap: 12
  }
})