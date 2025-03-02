import { StyleSheet } from "react-native";
import { AppColors, AppFonts } from '../../themes/AppThemes';


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.White,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: AppColors.Secoundary,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: AppColors.Text,
    
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: AppColors.Text,
    marginBottom: 20,
  },
  listContainer: {
    marginBottom: 20,
  },
  domainCard: {
    backgroundColor: AppColors.White,
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    shadowColor: AppColors.Event,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  domainInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  domainText: {
    fontSize: 14,
    color: "#333",
  },
  offerCard: {
    backgroundColor: "#007AFF",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    position: "relative",
  },
  offerTag: {
    position: "absolute",
    top: -15,
    left: -10,
    backgroundColor: "red",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  offerText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  offerTitle: {
    color: "#FFF",
    fontSize: 14,
    marginBottom: 5,
  },
  offerDiscount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
  offerCode: {
    fontSize: 14,
    color: "#FFF",
    marginTop: 5,
  },
  offerValidity: {
    fontSize: 12,
    color: "#FFF",
    marginTop: 5,
  },
  offerConditions: {
    fontSize: 10,
    color: "#FFF",
    marginTop: 2,
  },
});
