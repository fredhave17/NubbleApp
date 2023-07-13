import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SettingScreen} from '../screens/app/SettingScreen/SettingScreen';
import {AppTabBottomTabParamList, AppTabNavigator} from './AppTabNavigator';
import {NavigatorScreenParams} from '@react-navigation/native';

export type AppStackParamList = {
  // HomeScreen: undefined;
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
  SettingScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="HomeScreen">
      <Stack.Screen name={'AppTabNavigator'} component={AppTabNavigator} />
      <Stack.Screen name={'SettingScreen'} component={SettingScreen} />
    </Stack.Navigator>
  );
}
