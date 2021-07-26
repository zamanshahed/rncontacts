/**
 * cloud based Contacts App with React Native
 * Author: ZamanShahed
 * https://github.com/zamanshahed
 *
 * zamanshahed / July-2021
 */
import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import AppNavContainer from './src/navigations';

const App = () => {
  return <AppNavContainer />;
};

export default App;
