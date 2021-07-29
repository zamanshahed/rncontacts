import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import {GlobalContext} from '../context/Provider';
const AppNavContainer = () => {
  // const isLoggedIn = true;

  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);

  console.log('isLoggedIn : ', isLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}

      {/* <Text>Binary in my Blood!</Text> */}
    </NavigationContainer>
  );
};

export default AppNavContainer;
