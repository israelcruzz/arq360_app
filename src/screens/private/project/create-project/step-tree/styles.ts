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
  badgesButtonsArea: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
    marginTop: 12,
  },
  badgeButtonArea: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16
  },
  badgeTextActive: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16
  },
  badgeTextDesactive: {
    color: '#000000',
    fontWeight: 'semibold'
  },
  badgeButtonAreaDesactive: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E8ECF4',
  },
  badgeButtonAreaActive: {
    backgroundColor: '#000000',
  },
  projectArea: {
    paddingBottom: 200,
    paddingTop: 24,
    gap: 24
  },
  searchClientArea: {
    flexDirection: 'row',
    width: '100%',
    gap: 12
  },
  addClientButton: {
    backgroundColor: '#000000',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 400,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 16,
    alignItems: 'center',
    gap: 24
  },
  modalText: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'flex-start'
  },
  errorText: {
    color: 'red',
    marginTop: 8
  },
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
  },
  addClientButtonArea: {
    backgroundColor: '#000000',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  addClientButtonText: {
    color: "#FFFFFF",
    fontWeight: 'semibold',
    fontSize: 16
  }
});