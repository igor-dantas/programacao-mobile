import { Text, View } from 'react-native';
import React, { useState }from 'react';

import styled from 'styled-components/native';

const Safe = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Input = styled.TextInput`
  width: 200px;
  height: 40px;
  border: 1px solid #000;
`;

const Hello = function() {
  const [name, setName] = useState('Igor Dantas');
  return (
    <View>
      <Input value={name} onChangeText={setName}/>
        <Text>Nome: {name}</Text>
    </View>
  );
}

export default function App() {
  return (
    <Safe>
      <Hello/>
    </Safe>
  );

}
