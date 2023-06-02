import React from 'react';
import { View, Image } from 'react-native';

export default function MostraImagem() {
  let img = 'https://www.google.com.br/google.jpg';
  
  return (
    <View>
        <Image
            source={{ uri: img }}
            style={{ width: 300, height: 300 }}
            resizeMode="contain"
        />
     </View>
  );
}
