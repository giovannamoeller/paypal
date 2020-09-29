import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import {
  useFonts,
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
} from '@expo-google-fonts/manrope';
import { AppLoading } from 'expo';

import SignIn from './src/pages/SignIn';
import Dashboard from './src/pages/Dashboard';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  let [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <StatusBar style="light"/>
        <Dashboard/>
      </>
    );
  }
}
