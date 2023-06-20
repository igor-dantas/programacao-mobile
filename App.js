import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [sexo, setSexo] = useState('');
  const [pesoIdeal, setPesoIdeal] = useState('');
  const [pesoIdealAjustado, setPesoIdealAjustado] = useState('');

  const calculaPesoIdeal = function () {
    if (sexo.toLowerCase() === 'm') {
      setPesoIdeal((52 + (0.75 * (parseFloat(altura) - 152.4))).toFixed(2));
      return (52 + (0.75 * (parseFloat(altura) - 152.4)));
    } else if (sexo.toLowerCase() === 'f') {
      setPesoIdeal((52 + (0.67 * (parseFloat(altura) - 152.4))).toFixed(2));
      return (52 + (0.67 * (parseFloat(altura) - 152.4)));
    }
  };

  const calculaPesoIdealAjustado = function () {
    setPesoIdealAjustado((((parseFloat(peso) - calculaPesoIdeal()) * 0.25) + calculaPesoIdeal()).toFixed(2));

    setAltura('');
    setPeso('');
    setSexo('');
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Calculadora Peso Ideal</Text>
      <TextInput 
        placeholder="Peso (Kg)" 
        keyboardType="numeric" 
        style={style.input}
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput 
        placeholder="Altura (cm)" 
        keyboardType="numeric" 
        style={style.input}
        value={altura}
        onChangeText={setAltura}
      />
      <TextInput 
        placeholder="Sexo (M/F)" 
        style={style.input}
        value={sexo}
        onChangeText={setSexo}
      />
      <TouchableOpacity 
        style={style.button}
        onPress={calculaPesoIdealAjustado} 
      >
        <Text style={style.textoButton}>Calcular</Text>
      </TouchableOpacity>

      <Text style={style.resultado}>Peso ideal: {pesoIdeal} Kg</Text>
      <Text style={style.resultado}>Peso ideal Ajustado: {pesoIdealAjustado} Kg</Text>

    </View>
  );
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 250,
  },
  title: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 30,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#DDD',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#000',
    fontSize: 23,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#41AEF4',
    borderRadius: 10,
    margin: 15,
    padding: 10,
  },
  textoButton: {
    color: '#FFF',
    fontSize: 25,
    textAlign: 'center',
  },
  resultado: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 30,
  },
});
