import React from 'react';
import Tela01 from '@/src/telas/tela01';
import { View, StatusBar, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return <>
    <StatusBar backgroundColor="rgba(34, 34, 34, 1)"
      barStyle="light-content"
      hidden={false}
      animated={true}
      translucent={true}
    />
    <Tela01/>
    </>
}
