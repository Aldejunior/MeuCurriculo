import React from 'react';
import { View, Text, Button } from 'react-native';

const Objetivo = ({ navigation }) => {
    return (
        <View>
            <Text>Objetivo</Text>
            <Text>Viver</Text>
            <Text>Ter sussego</Text>

            <Button 
                title="Voltar"
                onPress={ () => navigation.goBack('Soueu') }
            />

        </View>
    );
}

export default Objetivo;