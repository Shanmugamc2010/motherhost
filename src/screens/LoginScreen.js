import React from 'react';
import {Text, View,TouchableOpacity} from 'react-native';
import {loginStyles} from './LoginStyles';
import {AppBar} from '../components/AppBar';
import {MHRoundedTextInput} from '../components/MHRoundedTextInput';
import {LoginData} from './LoginData';
import {MHRoundedButton} from '../components/MHRoundedButton';
import {SCREENS} from '../navigation/Screens';

const LoginScreen = ({navigation}) => {
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
        <MHRoundedButton onPress={() => navigation.replace(SCREENS.MY_PRODUCT_AND_SERVICES)} buttonTitle={LoginData.SINGN_IN} />
      </View>
      <View style={ loginStyles.resetPwdfooter}>
      <TouchableOpacity >
      <Text >{LoginData.NEED_TO_FIND_YOUR}<Text onPress={() => navigation.navigate(SCREENS.RESET_PASSWORD)} style={loginStyles.highlightTextPwd}>{LoginData.PASSWORD}<Text style={loginStyles.highlightTextPwd}>{LoginData.QUSTION_MARK}</Text></Text></Text>
      </TouchableOpacity>
      <TouchableOpacity >
      <Text style={loginStyles.emailText}>{LoginData.NEW_TO_MOTHERHOST}<Text onPress={() => navigation.navigate(SCREENS.CREATE_ACCOUNT)} style={loginStyles. highlightTextAccnt}>{LoginData.ACCOUNT}</Text></Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
