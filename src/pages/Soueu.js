import React from 'react';
import { View, Text, Button, Image } from "react-native";

const Soueu = ({ navigation }) => {
    return (
        <View>
            <Image style={Style.imagem}
                source={require('../Imagens/Ferrari.jpg')}
                />
            <Text>Esse sou eu!</Text>
            <Text>
                Bom... tenho 17 anos. Estou com um cançasso 
                de alguem de 50 anos, mas e á vida.
            </Text>

            <Button 
                title="Objetivo"
                onPress={ () => navigation.navigate('Objetivo') }
            />
            <Button 
                title="Formação"
                onPress={ () => navigation.navigate('Formacao') }
            />
             <Button 
                title="Experiência"
                onPress={ () => navigation.navigate('Experiencia') }
            />
        </View>
    );
}

export default Soueu;