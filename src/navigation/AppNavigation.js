import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import ResetPasswordScreen from '../screens/resetPassword/ResetPasswordScreen';
import ResetNewPasswordScreen from '../screens/resetNewPassword/ResetNewPasswordScreen';
import CreateAccount from '../screens/createAccount/CreateAccountScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ServiceScreen from '../screens/myProductAndServices/MyProductAndServicesScreen';
import DomainRegistration from '../screens/domainRegistration/DomainRegistration';
import HostingScreen from '../screens/hosting/HostingScreen';
import DomainScreen from '../screens/domain/DomainScreen';
import BottomSheet from '../screens/bottomSheet/BottomSheetScreen';
import Sidebar from '../screens/sidebar/Sidebar'
import { SCREENS } from './Screens';
import HomeScreenn from '../screens/home/Home';
import { navigationRef } from './NavigationService';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer
    ref={navigationRef}
    >
     <Stack.Navigator  screenOptions={{ headerShown: false}}>
     <Stack.Screen name={SCREENS.LOG_IN} component={LoginScreen} />
     <Stack.Screen name={SCREENS.HOME} component={HomeScreenn} />
     <Stack.Screen name={SCREENS.SIDEBAR} component={Sidebar} />
     <Stack.Screen name={SCREENS.DOMAIN_REGISTRATION} component={DomainRegistration} />
     <Stack.Screen name={SCREENS.BOTTOM_SHEET} component={BottomSheet} />
     <Stack.Screen name={SCREENS.DOMAIN} component={DomainScreen} />
     <Stack.Screen name={SCREENS.HOSTING} component={HostingScreen} />
     <Stack.Screen name={SCREENS.MY_PRODUCT_AND_SERVICES} component={ServiceScreen} />
     <Stack.Screen name={SCREENS.CREATE_ACCOUNT} component={CreateAccount} />
     <Stack.Screen name={SCREENS.RESET_PASSWORD} component={ResetPasswordScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
