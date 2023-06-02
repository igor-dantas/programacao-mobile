import React from "react";
import { View, Text } from "react-native";

import MostraImagem from './components/MostraImagem';

export default function App() {
    //definindo variaveis
    let nome = 'Campus XX - Castanhal';

    // desenhando o componente
    return (
        <View>
            <Text>Olá mundo!!!</Text>
            <Text>Meu primeiro app</Text>
            <Text style={{ color: '#ff0000', fontSize: 25, margin: 15}}>UEPA - BES</Text>

            <MostraImagem/>

            <Text style={{ fontSize: 30 }}> {nome} </Text>
        </View>
    );}