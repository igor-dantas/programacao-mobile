import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar } from 'react-native';

const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  background-color: #DDD;
  height: 500px;
  flex-wrap: wrap;
  
`;

const Quadrado = styled.View`
  background-color: ${props => props.cor};
  height: 150px;
  width: 150px;
  justify-content: center;
  align-items: center;
`;

const Pagina = styled.View`
  flex: 1;
`;

const statusBarHeight = StatusBar.currentHeight || 0;
export default function App() {
  return (
    <SafeAreaView style={{ paddingTop: statusBarHeight }}>
      <Pagina>
        <Header>
          <Quadrado cor="blue"></Quadrado>
          <Quadrado cor="yellow">
            <Image 
              source={require('./src/img/logo2.jpg')}
              style={{ width: 50, height: 100, backgroundColor: '#AAA'}}
              resizeMode='contain' 
            />            
          </Quadrado>
          <Quadrado cor="red">
            <Image 
                source={{uri: 'https://www.google.com.br/google.jpg'}}
                style={{ width: 100, height: 100, backgroundColor: '#AAA'}}
                resizeMode='contain' 
              />   
          </Quadrado>
        </Header>
      </Pagina>
    </SafeAreaView>
  );
}

