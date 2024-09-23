import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 24,
    justifyContent: 'space-between'
  },
  textHeaderArea: {
    gap: 4,
    marginBottom: 24,
    marginTop: 24
  },
  buttonUpload: {
    width: 56,
    height: 56,
    backgroundColor: '#E6E6E6',
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  coverImageAreaDesactive: {
    width: 128 + 98,
    height: 128 + 16,
    objectFit: "cover",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    justifyContent: "center",
    alignItems: "center"
  },
  dropCoverImageButton: {
    width: 36,
    height: 36,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    position: "absolute",
    top: 0,
    right: 0
  },
  coverImageArea: {
    width: 128 + 98,
    height: 128 + 16,
  },
  inputsArea: {
    gap: 24
  },
  scrollViewArea: {
    gap: 24
  },
  formArea: {
    gap: 24
  },
  error: {
    color: 'red',
    paddingVertical: 4,
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
  convenientCard: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#D1D1D1',
    backgroundColor: '#FFFFFF',
  }
})