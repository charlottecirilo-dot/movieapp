import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext';
import { MovieProvider } from './src/context/MovieContext';
import TabNavigator from './src/navigation/TabNavigator';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <AuthProvider>
      <MovieProvider>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </MovieProvider>
    </AuthProvider>
  );
}
