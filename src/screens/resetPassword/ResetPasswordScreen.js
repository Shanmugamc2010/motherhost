import React from 'react';
import {Text, View} from 'react-native';
import {ResetPasswordStyles} from './ResetPasswordStyles'
import {AppBar} from '../../components/AppBar';
import {MHRoundedTextInput} from '../../components/MHRoundedTextInput';
import { ResetPasswordData } from './ResetPasswordData';


const ResetPasswordScreen = () => {
  return (
    <View style={ResetPasswordStyles.container}>
      <AppBar />
      <Text style={ResetPasswordStyles.resetPwdHeader}>{ResetPasswordData.RESET_PASSWORD}</Text>
      <Text style={ResetPasswordStyles.forgetPwdContent}>{ResetPasswordData.RESET_PASSWORD_CONTENT}</Text>
      <View style={ResetPasswordStyles.textViewStyle}>
        <MHRoundedTextInput
          title={ResetPasswordData.EMAIL_ADDRESS}
          placeholder={ResetPasswordData.EMAIL_ADDRESS_EG}
        />
        <View style={ ResetPasswordStyles.resetPwdfooter}>
        <Text style={ResetPasswordStyles.supportText}>{ResetPasswordData.QUERIES}</Text>
      <Text style={ResetPasswordStyles.emailText}>{ResetPasswordData.EMAIL_US}<Text style={ResetPasswordStyles.highlightText}>{ResetPasswordData.SUPPORT}</Text></Text>
      <Text style={ResetPasswordStyles.callText}>{ResetPasswordData.CALL_US} <Text >{ResetPasswordData.CALL_US_NUMBR}</Text></Text>
        </View>
      </View>
    </View>
  );
};

export default ResetPasswordScreen;
