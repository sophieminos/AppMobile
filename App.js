import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Accueil from './Components/Accueil';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Salut Jacques-Arno, Salut Sophie!!</Text>
      <Accueil/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
