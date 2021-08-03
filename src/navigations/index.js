import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator, Text} from 'react-native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import {GlobalContext} from '../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AppNavContainer = () => {
  // const isLoggedIn = true;

  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoaded, setAuthLoaded] = useState(false);

  //defining the async func outside useEffect cs it's not allowed there
  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        setAuthLoaded(true);
        setIsAuthenticated(true);
      } else {
        setAuthLoaded(false);
        setIsAuthenticated(false);
      }
    } catch (error) {}
  };

  //using useEffect to check if something exists in the async storage
  useEffect(() => {
    getUser();
  }, []);

  console.log('isAuthenticated : ', isAuthenticated);
  console.log('isLoggedIn : ', isLoggedIn);

  return (
    <>
      {authLoaded ? (
        <NavigationContainer>
          {isAuthenticated || isLoggedIn ? (
            <DrawerNavigator />
          ) : (
            <AuthNavigator />
          )}

          {/* <Text>Binary in my Blood!</Text> */}
        </NavigationContainer>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
};

export default AppNavContainer;
