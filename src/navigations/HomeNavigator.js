import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {View, Text, Settings} from 'react-native';
import {
  CONTACT_DETAIL,
  CONTACT_LIST,
  CREATE_CONTACT,
  SETTINGS,
} from '../constants/routeNames';
import Contacts from '../screens/Contacts';
import ContactDetails from '../screens/ContactDetails';
import CreateContacts from '../screens/CreateContacts';
import ContactSettings from '../screens/Settings';
import {Text, TouchableOpacity, View} from 'react-native';
import colors, {Colors} from '../assets/theme/colors';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen
        name={CONTACT_LIST}
        component={Contacts}></HomeStack.Screen>

      <HomeStack.Screen
        name={CONTACT_DETAIL}
        component={ContactDetails}></HomeStack.Screen>

      <HomeStack.Screen
        name={CREATE_CONTACT}
        component={CreateContacts}></HomeStack.Screen>

      <HomeStack.Screen
        name={SETTINGS}
        component={ContactSettings}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
