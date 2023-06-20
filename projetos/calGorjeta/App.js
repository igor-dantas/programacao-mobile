import React, { useState } from 'react';
import { View, Text, Button, StatusBar } from 'react-native';

import styled from 'styled-components/native';


const Page = styled.SafeAreaView`
  flex:1;
  align-items:center;
`;

const HeaderText = styled.Text`  
  font-size:25px;
`;

const Input = styled.TextInput`
  width:90%;
  height:50px;
  font-size:18px;
  background-color:#EEE;
  margin-top:20px;
  border-radius:10px;
  padding:10px;
`;


const statusBarHeight = StatusBar.currentHeight || 0;

export default () => {
  return (
    <Page style={{ paddingTop: statusBarHeight }}>
      <HeaderText>Calculadora</HeaderText>
      <Input placeholder="Qual o valor da conta?" keyboardType="numeric" />
      <Input placeholder="Qual a porcentagem de gorjeta?" keyboardType="numeric" />
      <Button title="Calcular" />
    </Page>
  );
}
