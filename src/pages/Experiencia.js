import React from 'react';
import { View, Text, Button } from 'react-native';

const Experiencia = ({ navigation }) => {
    return (
        <View>
            <Text>Experiência</Text>
            <Text>Escola</Text>
            <Text>Trabalho</Text>

            <Button 
                title="Voltar"
                onPress={ () => navigation.goBack('Soueu') }
            />

        </View>
    );
}

export default Experiencia;