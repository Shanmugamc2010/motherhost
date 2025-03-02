import { StyleSheet } from 'react-native';
import { AppColors, AppFonts } from '../../themes/AppThemes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.White,
  },
  header: {
    backgroundColor: AppColors.Secoundary,
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: AppColors.Primary,
    paddingBottom: 1,
  },
  headerSubtitle: {
    fontSize: 20,
    color: AppColors.Text,
    marginTop: 20,
    alignItems: 'center', 
  },
  listContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: AppColors.White,
    padding: 16,
    borderRadius: 12,
    shadowColor: AppColors.Event,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: AppColors.Event,
  },
  website: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
   row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  serviceType: {
    color: AppColors.Event,
    fontWeight: 'bold',
  },
  statusContainer: {
    backgroundColor: AppColors.Green,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    marginLeft: 8,
  },
  status: {
    fontSize: 12,
    color: AppColors.White,
    fontWeight: 'bold',
  },
  dateHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  secDateHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingTop:20
  },
  dateHeader: {
    fontSize: 12,
    color: AppColors.Text,
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    
  },
  secDateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    
  },
  dateText: {
    fontSize: 14,
    color: AppColors.Text,
    fontWeight: 'bold',
    
  },
  secDateText: {
    fontSize: 14,
    color: AppColors.Text,
    paddingBottom:3,
    fontWeight: 'bold',
  },
  validity: {
    fontSize: 12,
    color: AppColors.Text,
    marginTop: 10,
    
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: 5,
  },
  bottomData:{
    backgroundColor:AppColors.Gray
  }
});
