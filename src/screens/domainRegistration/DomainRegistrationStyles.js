import { StyleSheet } from "react-native";
import { AppColors, AppFonts } from '../../themes/AppThemes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.White,
    
  },
  secondContainer: {
    padding: 17,
  },
  header: {
    backgroundColor: AppColors.Secoundary,
    padding: 10,
    alignItems: 'center',
    
  },
   title: {
    fontSize: 20,
    fontWeight: "bold",
    color: AppColors.Primary,
    textAlign: "center",
    padding: 15,
    backgroundColor: AppColors.Secoundary,
  },
  backIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  card: {
    backgroundColor: AppColors.White,
    padding: 16,
    borderRadius: 10,
    shadowColor: AppColors.Event,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  domainText: {
    fontSize: 18,
    fontWeight: "bold",
    color: AppColors.Text,
  },
  activeBadge: {
    backgroundColor: AppColors.Green,
    color: AppColors.White,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 10,
  },
  row: {
    flexDirection: "row",
    marginVertical: 5,
  },
  dateRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  validity: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  label: {
    fontSize: 14,
    color: AppColors.Text,
  },
  value: {
    fontSize: 14,
    fontWeight: "bold",
    color: AppColors.Text,
  },
  servers: {
    paddingLeft: 20,
    paddingBottom: 10
  },
  nameServers: {
    marginTop: 10,
  },
  taxRate: {
    marginVertical: 10
  },
  editIcon: {
    fontSize: 20,
    alignSelf: "flex-end",
    color: AppColors.Text,
  },
  priceText: {
    flexDirection: "row",
    fontSize: 18,
    fontWeight: "bold",
    
  },
  button: {
    backgroundColor: AppColors.Secoundary,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: AppColors.Primary,
  },
  eventColor: {
    color: AppColors.Event,
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContainer: {
    backgroundColor: AppColors.White,
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: AppColors.Text
  },
  modalInput: {
    borderWidth: 1,
    borderColor: AppColors.Secoundary,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    color: AppColors.Text
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: AppColors.Event,
    padding: 10,
    borderRadius: 5,
    marginRight: 5,
    alignItems: "center",
  },
  updateButton: {
    flex: 1,
    backgroundColor: AppColors.Green,
    padding: 10,
    borderRadius: 5,
    marginLeft: 5,
    alignItems: "center",
  },
  cancelText: {
    color: AppColors.White,
    fontWeight: "bold",
  },
  updateText: {
    color: AppColors.White,
    fontWeight: "bold",
  },
});
