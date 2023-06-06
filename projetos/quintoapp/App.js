import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar } from 'react-native';

const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  background-color: #DDD;
  height: 200px;
  
`;
const Quadrado = styled.View`
  background-color: ${props => props.cor};
  height: 50px;
  width: 50px;
`;

const Pagina = styled.View`
  flex: 1;
  justify-content: center;
`;
//const statusBarHeight = StatusBar.currentHeight || 0;
export default function App() {
  return (
    //<SafeAreaView style={{ paddingTop: statusBarHeight }}>
      <Pagina>
        <Header>
          <Quadrado cor="blue"></Quadrado>
          <Quadrado cor="yellow"></Quadrado>
          <Quadrado cor="red"></Quadrado>
          <Quadrado cor="green"></Quadrado>
        </Header>
      </Pagina>
    //</SafeAreaView>
  );
}

