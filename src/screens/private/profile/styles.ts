import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 72,
    gap: 24,
    backgroundColor: "#FFFFFF",
    flex: 1
  },
  headerArea: {
    backgroundColor: "#F9F9F9",
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingTop: 64,
    paddingBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 999,
    position: 'absolute',
    top: -40,
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#1E232C',
    textAlign: 'center'
  },
  detailsText: {
    fontWeight: 'medium',
    fontSize: 14,
    color: '#76797E', 
    textAlign: 'center'
  },
  infosArea: {
    flexDirection: 'row',
    gap: 24
  },
  infoCardArea: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    backgroundColor: 'white'
  },
  infoHeadingText: {
    fontWeight: 'medium',
    fontSize: 14,
    color: '#666666'
  },
  infoText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000000'
  },
  optionsArea: {
    gap: 12
  },
  optionArea: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 24
  },
  optionViewArea: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center'
  },
  optionIconArea: {
    backgroundColor: '#F7F6F9',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12
  },
  buttonUpload: {
    width: 30,
    height: 30,
    backgroundColor: '#000',
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
})