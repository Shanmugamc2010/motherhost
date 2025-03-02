import { StyleSheet } from 'react-native';
import { AppColors, AppFonts } from '../../themes/AppThemes';


export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.Primary, // Background color similar to your image
  },
  button: {
    padding: 12,
    backgroundColor: AppColors.White,
    borderRadius: 8,
    shadowColor: AppColors.Event,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: AppColors.Primary,
    fontWeight: 'bold',
    fontSize: 16,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  sheetContent: {
    backgroundColor: AppColors.White,
    paddingBottom: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 15,
    shadowColor: AppColors.Event,
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  dragHandle: {
    width: 50,
    height: 5,
    backgroundColor: AppColors.Event,
    borderRadius: 3,
    marginBottom: 10,
  },
  menuItem: {
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 18,
    color: AppColors.Primary,
    fontWeight: 'bold',
  },
});
