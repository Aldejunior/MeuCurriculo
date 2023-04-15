import React from 'react';
import { View, Text, Button } from "react-native";

const Sobre = ({ navigation }) => {
    return (
        <View>
            <Text>Esse sou eu!</Text>
            <Text>
                Bom... tenho 17 anos. Estou com um cançasso 
                de alguem de 50 anos, mas e á vida.
            </Text>

            <Button 
                title="Objetivo"
                onPress={ () => navigation.navigation('Objetivo') }
            />
            <Button 
                title="Formação"
                onPress={ () => navigation.navigation('Formacao') }
            />

        </View>
    );
}

export default Sobre;