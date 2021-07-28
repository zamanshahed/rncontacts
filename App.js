/**
 * cloud based Contacts App with React Native
 * Author: ZamanShahed
 * https://github.com/zamanshahed
 *
 * zamanshahed / July-2021
 */
import 'react-native-gesture-handler';
import React from 'react';

import AppNavContainer from './src/navigations';
import GlobalProvider from './src/context/Provider';

const App = () => {
  // return (
  //   <GlobalProvider>
  //     <AppNavContainer />
  //   </GlobalProvider>
  // );
  return (
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
  );
};

export default App;
