import { StyleSheet } from 'react-native';
import { AppColors, AppFonts } from '../../themes/AppThemes';

export const ResetNewPasswordStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.Secoundary,
        alignItems: 'center',
    },
    resetPwdHeader: {
        fontSize: 24,
        color: AppColors.Primary,
        fontFamily: AppFonts.Light,
        paddingLeft:40, 
        paddingTop:60, 
        width: '80%', 
        lineHeight: 30, 
    },
    resetPwdRequest: {
        fontSize: 14,
        color: AppColors.Green,
        fontFamily: AppFonts.SemiBold,
        paddingLeft:40, 
        paddingTop:60, 
        width: '80%', 
        lineHeight: 30, 
    },
    forgetPwdContent: {
        textAlign: 'center', 
        textAlignVertical: 'center', 
        width: '80%', 
        alignSelf: 'center', 
        fontSize: 14, 
        lineHeight: 15, 
        paddingTop:30, 
        paddingBottom:40,
        color: AppColors.Text,
    },
    textViewStyle: {
        width: '90%',
    },
    supportText: {
    fontSize: 14,
    marginTop: 30,
    color: AppColors.Text,
    alignSelf: 'center', 
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
    alignSelf: 'center', 
    fontWeight: 'bold',
    
  },
  highlightText: {
    fontWeight: 'bold',
    color: AppColors.Event,
  },
  resetPwdfooter: {
    paddingTop: 130
  }
});