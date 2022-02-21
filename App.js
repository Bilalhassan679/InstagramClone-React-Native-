import React from 'react';
import {HomePage, SettingsScreen, tabs3, tabs4} from './src/homePage/HomePage';
import ProfilePage from './src/profilePage/ProfilePage';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import {color} from './src/colors/colors';
import TopTabCenterPage from './src/components/TopTabCenterPage';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: color.tabBarActiveColor,
        }}>
        <Tab.Screen
          name="ProfilePage"
          component={ProfilePage}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <Image
                source={require('./src/images/yourprofile.png')}
                style={{width: 30, height: 30}}
              />
            ),
          }}
        />
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
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
