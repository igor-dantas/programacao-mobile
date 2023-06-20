import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar } from 'react-native';

const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #DDD;
  flex-wrap: wrap;
  width: 100%;
`;

const Foto = styled.View`
  background-color: ${props => props.cor};
  height: 150px;
  width: 50%;
  justify-content: center;
  align-items: center;
`;

const FotoExterna = styled.View`
  background-color: ${props => props.cor};
  height: 150px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Pagina = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #add8e6;
  width: 100%;
  height: 100%;
    
`;

const Titulos = styled.View`
  padding: 40px;
`;

StatusBar

export default function App() {
  return (
    <SafeAreaView style={{ paddingTop: statusBarHeight }}>
      <Pagina>
          <Titulos>
            <Text>Galeria de fotos do</Text>
              <Text>Igor Dantas Quintanilha</Text>
            <Text>Marvel Minimalist</Text>
          </Titulos>
        <Header>
          <Foto cor="blue">
            <Image 
              source={require('./src/img/iron-man.jpg')}
              style={{ width: 50, height: 100, backgroundColor: '#AAA'}}
              resizeMode='contain' 
            />
          </Foto>
          <Foto cor="yellow">
            <Image 
              source={require('./src/img/capita.png')}
              style={{ width: 50, height: 100, backgroundColor: '#AAA'}}
              resizeMode='contain' 
            />
          </Foto>
        </Header>

        <Header>
          <Foto cor="red">
            <Image 
              source={require('./src/img/capitao.png')}
              style={{ width: 50, height: 100, backgroundColor: '#AAA'}}
              resizeMode='contain' 
            />
          </Foto>
          <Foto cor="black">
            <Image 
              source={require('./src/img/spider.jpg')}
              style={{ width: 50, height: 100, backgroundColor: '#AAA'}}
              resizeMode='contain' 
            />
          </Foto>
        </Header> 
        
         <FotoExterna cor="green">
          <Image
            source={{uri: 'https://wallpapers.com/images/high/marvel-minimalist-4r4egucjlelf1m8t.webp'}}
            style={{ width: '100%', height: 100, backgroundColor: '#AAA'}}
            resizeMode='contain'
          />
        </FotoExterna>
      </Pagina>
    </SafeAreaView>
  );
}
