import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState(''); // Armazena o valor do peso
  const [altura, setAltura] = useState(''); // Armazena o valor da altura

  function executarCalculos() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    let pesoIdeal, pesoIdealAjustado;

    if (imc < 18.6) {
      alert('Você está abaixo do peso! - IMC = ' + imc.toFixed(2));
    } else if (imc >= 18.6 && imc < 24.9) {
      alert('Você está com o Peso ideal! - IMC = ' + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34.9) {
      alert('Você está levemente acima do peso! - IMC = ' + imc.toFixed(2));
    } else if (imc >= 34.9) {
      alert('Você está acima do peso! - IMC = ' + imc.toFixed(2));
    }

    // Cálculo do Peso Ideal
    if (altura >= 152.4) {
      if (altura >= 152.4 && altura <= 165.1) {
        pesoIdeal = 52 + (0.67 * (altura - 152.4));
      } else {
        pesoIdeal = 52 + (0.75 * (altura - 152.4));
      }
    } else {
      pesoIdeal = 0; // Altura inválida
    }

    // Cálculo do Peso Ideal Ajustado
    if (imc < 18.6 || imc > 34.9) {
      if (pesoIdeal !== 0) {
        pesoIdealAjustado = ((peso - pesoIdeal) * 0.25) + pesoIdeal;
        alert('Seu Peso Ideal Ajustado é: ' + pesoIdealAjustado.toFixed(2));
      } else {
        alert('Altura inválida. Não foi possível calcular o Peso Ideal Ajustado.');
      }
    }

    setPeso('');
    setAltura('');
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>Calcule seu IMC</Text>
      <TextInput
        placeholder="Peso (Kg)"
        keyboardType="numeric"
        style={style.input}
        value={peso} // valor dentro do componente
        onChangeText={setPeso} // toda vez que o campo mudar ele é salvo
      />
      <TextInput
        placeholder="Altura (cm)"
        keyboardType="numeric"
        style={style.input}
        value={altura} // valor dentro do componente
        onChangeText={setAltura} // toda vez que o campo mudar ele é salvo
      />
      <TouchableOpacity style={style.button} onPress={executarCalculos}>
        <Text style={style.textoButton}>Calcular</Text>
      </TouchableOpacity>
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
  }
});
