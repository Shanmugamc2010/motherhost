import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import ResetPasswordScreen from '../screens/resetPassword/ResetPasswordScreen'
import CreateAccount from '../screens/createAccount/CreateAccount'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from './Screens';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{ headerShown: false}}>
     <Stack.Screen name={SCREENS.CREATE_ACCOUNT} component={CreateAccount} />
     <Stack.Screen name={SCREENS.LOG_IN} component={LoginScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
