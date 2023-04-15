import React from 'react';
import { View, Text, Button } from 'react-native';

const Formacao = ({ navigation }) => {
    return (
        <View>
            <Text>Formação</Text>
            <Text>Escola</Text>
            <Text>ETEC</Text>

            <Button 
                title="Voltar"
                onPress={ () => navigation.goBack('Soueu') }
            />

        </View>
    );
}

export default Formacao;