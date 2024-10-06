import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 24
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
});