import React from 'react';
import Tela01 from '@/src/telas/tela01';
import { View, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from '@/src/routes/app.routes';

export default function HomeScreen() {
  return <>
    <StatusBar backgroundColor="rgba(34, 34, 34, 1)"
      barStyle="light-content"
      hidden={false}
      animated={true}
      translucent={true}
    />
    <AppRoutes/>
  </>


}
