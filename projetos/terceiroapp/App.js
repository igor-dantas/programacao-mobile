import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import styled from 'styled-components/native';

//criando componente de texto
const Texto = styled.Text`
font-size: 30px;
color: #FF0000;
background-color: green;
`;
const Texto2 = styled.Text`
font-size: 30px;
color: #FFFF00;
background-color: red;
`;
//
const Viewzinha = styled.View`
  background-color: #0000FF;
  flex: 1;
`;

export default function App() {
  return (
    <Viewzinha>
      <Texto>Open up App.js to start working on your app!</Texto>
      <Texto2>Open up App.js to start working on your app!</Texto2>
    </Viewzinha>
  );
}
