import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EditProfilePage from '../screens/editProfilePage/EditProfilePage';
import BottomNavigator from './BottomNavigator';
import TopTabBar from '../components/TopTabBar';
const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="EditProfile"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="EditProfile" component={EditProfilePage} />
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
      <Stack.Screen name="TopTabBar" component={TopTabBar} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
