import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';

const Contacts = () => {
  return (
    <View>
      <Text>Signal received from Contacts !!</Text>
    </View>
  );
};

const ContactDetails = () => {
  return (
    <View>
      <Text>Signal received from ContactDetails !!</Text>
    </View>
  );
};

const CreateContacts = () => {
  return (
    <View>
      <Text>Signal received from CreateContacts !!</Text>
    </View>
  );
};

const Settings = () => {
  return (
    <View>
      <Text>Signal received from Contacts-Settings !!</Text>
    </View>
  );
};

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName="Contacts">
      <HomeStack.Screen name="Contacts" component={Contacts}></HomeStack.Screen>

      <HomeStack.Screen
        name="Contacts-Details"
        component={ContactDetails}></HomeStack.Screen>

      <HomeStack.Screen
        name="Create-Contacts"
        component={CreateContacts}></HomeStack.Screen>

      <HomeStack.Screen
        name="Contacts-Settings"
        component={Settings}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
