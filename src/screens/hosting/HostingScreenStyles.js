import { StyleSheet } from "react-native";
import { AppColors, AppFonts } from '../../themes/AppThemes';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: AppColors.White,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  backButton: {
    position: "absolute",
    left: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: AppColors.Primary,
  },
  card: {
    backgroundColor: AppColors.White,
    borderRadius: 10,
    padding: 20,
    shadowColor: AppColors.Event,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  domain: {
    fontSize: 16,
    fontWeight: "bold",
    color: AppColors.Text,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  statusText: {
    color: AppColors.Event,
    marginRight: 8,
  },
  activeBadge: {
    backgroundColor: AppColors.Green,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  activeText: {
    color: AppColors.White,
    fontSize: 12,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  dateBox: {
    alignItems: "center",
  },
  dateText: {
    color: AppColors.Text,
    fontSize: 14,
  },
  dateValue: {
    fontWeight: "bold",
    color: AppColors.Text,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 15,
  },
  usageContainer: {
    marginVertical: 10,
  },
  usageLabel: {
    fontWeight: "bold",
  },
  usageText: {
    color: AppColors.Text,
  },
  progressBar: {
    height: 8,
    backgroundColor: AppColors.Gray,
    borderRadius: 5,
    marginTop: 5,
    overflow: "hidden",
  },
  diskUsage: {
    width: "70%",
    height: "100%",
    backgroundColor: AppColors.Green,
  },
  bandwidthUsage: {
    width: "60%",
    height: "100%",
    backgroundColor: AppColors.Green,
  },
  autoRenewText: {
    fontSize: 12,
    color: AppColors.Text,
    marginVertical: 10,
  },
  legendContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  greenDot: {
    width: 10,
    height: 10,
    backgroundColor: AppColors.Green,
    borderRadius: 5,
    marginRight: 5,
  },
  yellowDot: {
    width: 10,
    height: 10,
    backgroundColor: "yellow",
    borderRadius: 5,
    marginRight: 5,
  },
  redDot: {
    width: 10,
    height: 10,
    backgroundColor: AppColors.Red,
    borderRadius: 5,
    marginRight: 5,
  },
  loginButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: AppColors.Secoundary,
    padding: 10,
    borderRadius: 30,
  },
  loginTextContainer: {
    marginLeft: 10,
  },
  loginText: {
    fontWeight: "bold",
    color: AppColors.Event,
  },
  loginSubText: {
    fontSize: 12,
    color: AppColors.Text,
  },
  renewButton: {
    backgroundColor: AppColors.Secoundary,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },
  renewText: {
    color: AppColors.Event,
    fontWeight: "bold",
  },
});
