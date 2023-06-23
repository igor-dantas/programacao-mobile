import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

const HeaderText = styled.Text`
  font-size: 25px;
`;

const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  font-size: 18px;
  background-color: #eee;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;
`;

const CalcButton = styled.TouchableOpacity`
  margin-top: 10px;
  background-color: #ccc;
  padding: 10px 20px;
  border-radius: 5px;
`;

const CalcButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

const ResultArea = styled.View`
  width: 80%;
  margin-top: 30px;
  background-color: #eee;
  padding: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const ResultItemTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const ResultItem = styled.Text`
  font-size: 15px;
  margin-bottom: 30px;
`;

const PctArea = styled.View`
  flex-direction: row;
  margin: 20px;
`;

const PctItem = styled.TouchableOpacity`
  margin-right: 10px;
  background-color: #ccc;
  padding: 10px 15px;
  border-radius: 5px;
`;

const PctItemText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

const statusBarHeight = StatusBar.currentHeight || 0;

export default () => {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(0);
  const [pct, setPct] = useState(10);

  const calc = () => {
    let nBill = parseFloat(bill);
    if (nBill) {
      setTip((pct / 100) * nBill);
    } else {
      alert('Digite o valor da conta!');
    }
  };

  return (
    <Page style={{ paddingTop: statusBarHeight }}>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Input
        placeholder="Qual o valor da conta?"
        placeholderTextColor="#000"
        keyboardType="numeric"
        value={bill}
        onChangeText={(n) => setBill(n)}
      />

      <PctArea>
        <PctItem onPress={() => setPct(5)}>
          <PctItemText>5%</PctItemText>
        </PctItem>
        <PctItem onPress={() => setPct(10)}>
          <PctItemText>10%</PctItemText>
        </PctItem>
        <PctItem onPress={() => setPct(15)}>
          <PctItemText>15%</PctItemText>
        </PctItem>
        <PctItem onPress={() => setPct(20)}>
          <PctItemText>20%</PctItemText>
        </PctItem>
      </PctArea>

      <CalcButton onPress={calc}>
        <CalcButtonText>Calcular {pct}%</CalcButtonText>
      </CalcButton>

      {tip > 0 && (
        <ResultArea>
          <ResultItemTitle>Valor da Conta</ResultItemTitle>
          <ResultItem>R$ {parseFloat(bill).toFixed(2)}</ResultItem>

          <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
          <ResultItem>
            R$ {tip.toFixed(2)} ({pct}%)
          </ResultItem>

          <ResultItemTitle>Valor Total</ResultItemTitle>
          <ResultItem>
            R$ {(parseFloat(bill) + tip).toFixed(2)}
          </ResultItem>
        </ResultArea>
      )}
    </Page>
  );
};
