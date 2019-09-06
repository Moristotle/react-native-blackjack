import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import NavigationWrapper from './app/navigation/navigation-wrapper'; 
import LoginScreen from './login/loginScreen'

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFont();
    console.log("[APP]: loading of fonts was succesfull");
  })

  const loadFont = async () => {
    await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
    });
    setLoading(false);
  }
  if (loading) {
    <AppLoading />
  }

  return (
    <NavigationWrapper></NavigationWrapper>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
