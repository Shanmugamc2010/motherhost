import React, { useEffect, useState } from 'react';
import {Text, View,TouchableOpacity} from 'react-native';
import {loginStyles} from './LoginStyles';
import {AppBar} from '../components/AppBar';
import {MHRoundedTextInput} from '../components/MHRoundedTextInput';
import {LoginData} from './LoginData';
import {MHRoundedButton} from '../components/MHRoundedButton';
import {SCREENS} from '../navigation/Screens';
import { useDispatch, useSelector } from 'react-redux';
import { TYPES } from '../redux/saga/SagaTypes';
const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('kramnath84@gmail.com');
  const [password, setPassword] = useState('Xn58Ptpsf?g4mCrz0');
  useEffect(() => {
  }, [])
  const onClickLogin = () => {
    if(!email){
      //TODO: SHOW ERROR TOAST
    }else if(!password){
       //TODO: SHOW ERROR TOAST
    }else{
      console.log('==> step 1');
      dispatch({type: TYPES.LOGIN, payload: {email: email, password2: password}});
    }


  }
  return (
    <View style={loginStyles.container}>
      <AppBar />
      <Text style={loginStyles.signinTxtStyle}>{LoginData.SINGN_IN}</Text>
      <View style={loginStyles.textViewStyle}>
        <MHRoundedTextInput
          title={LoginData.EMAIL_ADDRESS}
          value={email}
          placeholder={LoginData.EMAIL_ADDRESS_EG}
        />
        <MHRoundedTextInput
          title={LoginData.PASSWORD}
          value={password}
          placeholder={LoginData.PASSWORD_EG}
        />
        <MHRoundedButton onPress={() => onClickLogin()}  buttonTitle={LoginData.SINGN_IN} />
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
