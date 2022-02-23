import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import {color} from '../colors/colors';
import {HomePage, SettingsScreen, tabs3} from '../screens/homePage/HomePage';
import TopTabCenterPage from '../components/TopTabCenterPage';
import ProfilePage from '../screens/profilePage/ProfilePage';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: color.tabBarActiveColor,
      }}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Foundation name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Feather name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="tabs3"
        component={tabs3}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Feather name="plus-square" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="TopTabCenterPage"
        component={TopTabCenterPage}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Feather name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image
              source={require('../images/yourprofile.png')}
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
