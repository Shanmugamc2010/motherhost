import { StyleSheet } from 'react-native';
import { AppColors, AppFonts } from '../../themes/AppThemes';

export const CreateAccountStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.Secoundary,
        alignItems: 'center',
    },
    createAccntHeader: {
            fontSize: 30,
            color: AppColors.Primary,
            fontFamily: AppFonts.Light,
           paddingLeft:60, 
           paddingTop:60, 
            width: '80%', 
            lineHeight: 30, 
            paddingBottom:20,
             alignSelf: 'center', 
        },
    textViewStyle: {
        width: '90%',
    },
    highlightText: {
    fontWeight: 'bold',
    color: AppColors.Event,
    textDecorationLine: 'underline',
    alignSelf: 'center', 
    fontSize: 14,
  },
  createAccntTxt: {
    fontSize: 14,
    marginTop: 10,
    color: AppColors.Text,
    alignSelf: 'center', 
    fontWeight: 'bold',
  },
});