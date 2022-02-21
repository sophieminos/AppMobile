import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';

export default function Accueil() {
  return (
    <View style={styles.container}>
      <Text>Accueil</Text>
      <Button
        title="Test"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
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
