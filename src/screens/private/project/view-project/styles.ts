import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: "#FFFFFF"
  },
  scrollViewArea: {
    flexGrow: 1,
    paddingBottom: 160
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
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D1D1D1",
    padding: 24,
    gap: 24
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
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "90%",
    opacity: 1,
    borderRadius: 16,
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
    marginTop: 24,
    marginBottom: 24,
    gap: 12
  },
  boxAreaContainer: {
    flexDirection: "row",
    gap: 24,
  },
  boxArea: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center"
  },
  boxAreaIcon: {
    width: 46,
    height: 46,
    borderRadius: 8,
    backgroundColor: "#23262F",
    justifyContent: "center",
    alignItems: "center"
  },
  boxAreaTextHeading: {
    color: "#808080",
    fontSize: 14,
    fontWeight: "semibold"
  },
  boxAreaTextInfo: {
    color: "#141416",
    fontSize: 16,
    fontWeight: "bold"
  },
  descriptionProjectText: {
    color: "#828282",
    fontSize: 16,
    fontWeight: "regular"
  },
  mapContainer: {
    width: "100%",
    height: 200,
    borderRadius: 16
  },
  blockDescriptionArea: {
    marginBottom: 24,
    gap: 12
  },
  locationArea: {
    gap: 12
  },
  bottomSheetArea: {
    padding: 24
  },
  bottomSheet: {
    borderWidth: 1,
    borderColor: "#D1D1D1",
    borderRadius: 16,
  },
  convenientBoxArea: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "space-between",
    alignItems: "center"
  },
  convenientBox: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  convenientImageCard: {
    width: 86,
    height: 56,
    borderRadius: 12,
    borderWidth: 1,
    objectFit: "cover"
  },
  convenientText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000"
  },
  convenientListArea: {
    marginTop: 24,
    gap: 16
  },
  buttonEdit: {
    borderWidth: 1,
    borderColor: '#E8ECF4',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF'
  },
  modalOverlay: {
    flex: 1,
    position: "absolute",
    top: 0,
    right: 0,
    marginHorizontal: 48,
    marginVertical: 96
  },
  modalContent: {
    borderWidth: 1,
    borderColor: '#E8ECF4',
    width: 220,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 16,
    gap: 12
  },
  modalText: {
    fontWeight: 'regular',
    fontSize: 16,
  },
  optProjArea: {
    flexDirection: 'row',
    gap: 12,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#D1D1D1",
    
  },
  configText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textConfigArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }
})