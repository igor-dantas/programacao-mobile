import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View  style={styles.pagina}>
      <Text>Olá mundo!</Text>
    </View>
  );
}


//criando estilo com StyleSheet
const styles = StyleSheet.create({
  pagina: {
    width: 200,
    height: 200,
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
