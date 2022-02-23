import React from 'react';
import ProfilePage from './src/screens/profilePage/ProfilePage';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import TopTabCenterPage from './src/components/TopTabCenterPage';
import StackNavigation from './src/navigation/StackNavigation';
import BottomNavigator from './src/navigation/BottomNavigator';
import TopTabBar from './src/components/TopTabBar';
function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

export default App;
