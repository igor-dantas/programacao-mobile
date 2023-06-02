import React from 'react';
import styled from 'styled-components/native';

const Quadrado = styled.View`
  background-color: ${props => props.cor};
  width: 50px;
  height: 50px;
`;

const Pagina = styled.View`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  background-color: #000000;
`;

export default function App() {
  return (
    <Pagina>
      <Quadrado cor="red"></Quadrado>
      <Quadrado cor="green"></Quadrado>
      <Quadrado cor="blue"></Quadrado>
    </Pagina>
  );
}

