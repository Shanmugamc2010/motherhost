import { StyleSheet } from 'react-native';
import { AppColors, AppFonts } from '../../themes/AppThemes';

export const CreateAccountStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.Secoundary,
        alignItems: 'center',
    },
    createAccntHeader: {
            fontSize: 24,
            color: AppColors.Primary,
            fontFamily: AppFonts.Light,
           paddingLeft:40, 
           paddingTop:60, 
            width: '80%', 
            lineHeight: 30, 
            paddingBottom:20
        },
    textViewStyle: {
        width: '90%',
    },
    highlightText: {
    fontWeight: 'bold',
    color: '#007AFF',
  },
  createAccntTxt: {
    fontSize: 14,
    marginTop: 10,
    color: '#333',
    alignSelf: 'center', 
    fontWeight: 'bold',
  },
});