import React from "react";
import { View, Text, Image } from "react-native";

export default function App() {
    //definindo variaveis
    let nome = 'Campus XX - Castanhal';
    let img = 'https://www.google.com.br/google.jpg';
    // desenhando o componente
    return (
        <View>
            <Text>Olá mundo!!!</Text>
            <Text>Meu primeiro app</Text>
            <Text style={{ color: '#ff0000', fontSize: 25, margin: 15}}>UEPA - BES</Text>
        </View>
    );}