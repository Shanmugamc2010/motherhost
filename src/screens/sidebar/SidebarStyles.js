import { StyleSheet } from 'react-native';
import { AppColors, AppFonts } from '../../themes/AppThemes';


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: AppColors.White,
    padding: 20,
  },
  header: {
    fontSize: 18,
    marginBottom: 40,
    marginTop: 70
  },
  menuItem: {
    paddingVertical: 15,
  },
  menuText: {
    fontSize: 16,
    color: AppColors.Text,
  },
});

export default styles;
