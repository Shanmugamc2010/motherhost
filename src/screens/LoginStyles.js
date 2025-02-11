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
    },
    textViewStyle: {
        width: '90%',
    },
});