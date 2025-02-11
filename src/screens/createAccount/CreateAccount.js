import React from 'react';
import {Text, View} from 'react-native';
import {CreateAccountStyles} from './CreateAccountStyles';
import { loginStyles } from '../../screens/LoginStyles';
import {AppBar} from '../../components/AppBar';
import {MHRoundedTextInput} from '../../components/MHRoundedTextInput';
import {CreateAccountData} from './CreateAccountData'
import {MHRoundedButton} from '../../components/MHRoundedButton';

const CreateAccount = () => {
  return (
    <View style={loginStyles.container}>
      <AppBar />
      <Text style={CreateAccountStyles.createAccntHeader}>{CreateAccountData.CREATE_ACCOUNT}</Text>
      <View style={loginStyles.textViewStyle}>
        <MHRoundedTextInput
          title={CreateAccountData.F_NAME}
          placeholder={CreateAccountData.EMAIL_ADDRESS_EG}
        />
        <MHRoundedTextInput
          title={CreateAccountData.L_NAME}
          placeholder={CreateAccountData.PASSWORD_EG}
        />
        <MHRoundedTextInput
          title={CreateAccountData.EMAIL_ADDRESS}
          placeholder={CreateAccountData.EMAIL_ADDRESS_EG}
        />
        <MHRoundedTextInput
          title={CreateAccountData.PASSWORD}
          placeholder={CreateAccountData.EMAIL_ADDRESS_EG}
        />
        <MHRoundedButton buttonTitle={CreateAccountData.CREATE_ACCNT} />
      </View>
      <View><Text style={CreateAccountStyles.createAccntTxt}>{CreateAccountData.ALRDY_HV_ACCNT} <Text style={CreateAccountStyles.highlightText}>{CreateAccountData.SIGN_IN}</Text></Text></View>
    </View>
  );
};

export default CreateAccount;
