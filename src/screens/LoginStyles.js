import { StyleSheet } from 'react-native';
import { AppColors, AppFonts } from '../themes/AppThemes';

export const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.Secoundary,
        alignItems: 'center',
        
    },
    signinTxtStyle: {
        fontSize: 24,
        color: AppColors.Primary,
        fontFamily: AppFonts.Light,
        paddingTop:60, 
        paddingBottom:40,
        paddingRight:50
    },
    textViewStyle: {
        width: '90%',
    },
    emailText: {
        fontSize: 14,
        marginTop: 10,
        color: AppColors.Text,
        alignSelf: 'center', 
        fontWeight: 'bold',
      },
      callText: {
        fontSize: 14,
        marginTop: 5,
        color: AppColors.Text, 
        fontWeight: 'bold',
        
      },
      highlightTextPwd: {
        color: AppColors.Event,
        
      },
      highlightTextAccnt: {
        fontWeight: 'bold',
        color: AppColors.Event,
        textDecorationLine: 'underline'
      },
      resetPwdfooter: {
        paddingTop: 80,
        alignItems: 'center',
      }
});