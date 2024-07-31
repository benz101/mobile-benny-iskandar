/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import StuffCalculatingPage from './src/StuffCalculatingPage';
import { SafeAreaProvider } from 'react-native-safe-area-context';




function App(): React.JSX.Element {

  return (
    <SafeAreaProvider>
      <StuffCalculatingPage />
    </SafeAreaProvider>
    

  );
}


export default App;
