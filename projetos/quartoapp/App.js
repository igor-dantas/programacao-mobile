import React from 'react';

import styled from 'styled-components/native';

//criando componente de texto
const Texto = styled.Text`
color: ${props => props.cor};
font-size: 30px;
background-color: green;
`;

//
const Viewzinha = styled.View`
  background-color: #0000FF;
  flex: 1;
`;

export default function App() {
  return (
    <Viewzinha>
      <Texto cor="red">Open up App.js to start working on your app!</Texto>
      <Texto cor="black">Open up App.js to start working on your app!</Texto>
    </Viewzinha>
  );
}
