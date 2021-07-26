import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './DrawerNavigator';
const AppNavContainer = () => {
  const isLoggedIn = true;
  return (
    <NavigationContainer>
      {/* <AuthNavigator /> */}
      {/* <HomeNavigator /> */}
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}

      <Text>Binary in my Blood!</Text>
    </NavigationContainer>
  );
};

export default AppNavContainer;
