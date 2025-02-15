import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import ResetPasswordScreen from '../screens/resetPassword/ResetPasswordScreen';
import ResetNewPasswordScreen from '../screens/resetNewPassword/ResetNewPasswordScreen';
import CreateAccount from '../screens/createAccount/CreateAccountScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ServiceScreen from '../screens/myProductAndServices/MyProductAndServicesScreen';
import { SCREENS } from './Screens';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
     <Stack.Navigator  screenOptions={{ headerShown: false}}>
     <Stack.Screen name={SCREENS.LOG_IN} component={LoginScreen} />
     <Stack.Screen name={SCREENS.MY_PRODUCT_AND_SERVICES} component={ServiceScreen} />
     <Stack.Screen name={SCREENS.CREATE_ACCOUNT} component={CreateAccount} />
     <Stack.Screen name={SCREENS.RESET_PASSWORD} component={ResetPasswordScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
