import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    borderWidth: 1,
    borderColor: "#E6E6E6",
    width: 400,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 16,
    gap: 24
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  imageCard: {
    minWidth: "100%",
    width: "100%",
    height: 132,
    objectFit: "cover",
    borderRadius: 16,
    zIndex: 10
  },
  textArea: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingTop: 36,
    paddingBottom: 24,
    marginTop: -24,
    zIndex: 5
  },
  textCardTypeHeading: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    textTransform: "capitalize"
  },
  textCardType: {
    fontSize: 14,
    fontWeight: "regular",
    color: "#666666"
  },
  editButtonArea: {
    padding: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    justifyContent: "center",
    alignItems: "center",
  },
  editButtonText: {
    fontWeight: "bold"
  },
  deleteButtonArea: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 30,
    height: 30,
    borderRadius: 999,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 11,
    margin: 8
  }
})