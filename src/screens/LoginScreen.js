import React from 'react';
import {Text, View} from 'react-native';
import {loginStyles} from './LoginStyles';
import {AppBar} from '../components/AppBar';
import {MHRoundedTextInput} from '../components/MHRoundedTextInput';
import {LoginData} from './LoginData';
import {MHRoundedButton} from '../components/MHRoundedButton';

const LoginScreen = () => {
  return (
    <View style={loginStyles.container}>
      <AppBar />
      <Text style={loginStyles.signinTxtStyle}>{LoginData.SINGN_IN}</Text>
      <View style={loginStyles.textViewStyle}>
        <MHRoundedTextInput
          title={LoginData.EMAIL_ADDRESS}
          placeholder={LoginData.EMAIL_ADDRESS_EG}
        />
        <MHRoundedTextInput
          title={LoginData.PASSWORD}
          placeholder={LoginData.PASSWORD_EG}
        />
        <MHRoundedButton buttonTitle={LoginData.SINGN_IN} />
      </View>
    </View>
  );
};

export default LoginScreen;
