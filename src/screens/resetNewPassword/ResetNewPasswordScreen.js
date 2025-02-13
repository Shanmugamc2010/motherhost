import React from 'react';
import {Text, View} from 'react-native';
import {ResetNewPasswordStyles} from '../resetNewPassword/ResetNewPasswordStyles'
import {AppBar} from '../../components/AppBar';
import {MHRoundedButton} from '../../components/MHRoundedButton';
import {ResetNewPasswordData} from '../resetNewPassword/ResetNewPasswordData'



const ResetNewPasswordScreen = () => {
  return (
    <View style={ResetNewPasswordStyles.container}>
      <AppBar />
      <Text style={ResetNewPasswordStyles.resetPwdHeader}>{ResetNewPasswordData.RESET_PASSWORD}</Text>
      <Text style={ResetNewPasswordStyles.resetPwdHeader}>{ResetNewPasswordData.RESET_PASSWORD}</Text>
      <Text style={ResetNewPasswordStyles.resetPwdRequest}>{ResetNewPasswordData.PASSWORD_RESET_REQ}</Text>
      <Text style={ResetNewPasswordStyles.forgetPwdContent}>{ResetNewPasswordData.RESET_NEW_PASSWORD_CONTENT}</Text>
      <View style={ResetNewPasswordStyles.textViewStyle}>
        <MHRoundedButton onPress={() => navigation.navigate(SCREENS.LOG_IN)} buttonTitle={ResetNewPasswordData.CONTINUE_SIGN_IN} />
        <View style={ ResetNewPasswordStyles.resetPwdfooter}>
        <Text style={ResetNewPasswordStyles.supportText}>{ResetNewPasswordData.QUERIES}</Text>
      <Text style={ResetNewPasswordStyles.emailText}>{ResetNewPasswordData.EMAIL_US}<Text style={ResetNewPasswordStyles.highlightText}>{ResetNewPasswordData.SUPPORT}</Text></Text>
      <Text style={ResetNewPasswordStyles.callText}>{ResetNewPasswordData.CALL_US} <Text >{ResetNewPasswordData.CALL_US_NUMBR}</Text></Text>
        </View>
      </View>
    </View>
  );
};

export default ResetNewPasswordScreen;
