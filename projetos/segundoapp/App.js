import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.centralizador}>
      <View  style={styles.pagina}>
        <Text style={styles.texto}>Olá mundo!</Text>
      </View>
    </View>
  );
}


//criando estilo com StyleSheet
const styles = StyleSheet.create({
  pagina: {
    flexDirection: 'row',
    width: 200,
    height: 200,
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
  centralizador: { 
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  }
});
