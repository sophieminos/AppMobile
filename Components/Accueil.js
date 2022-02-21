import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Accueil() {
  return (
    <View style={styles.container}>
      <Text>Accueil</Text>
      <StatusBar style="auto" />
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
