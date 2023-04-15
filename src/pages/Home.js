import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View>
            <Text>Esse sou eu.</Text>

            <Button 
                title="Vamos Lá"
                onPress={ () => navigation.navigate('Soueu') }
            />
        </View>
    );
}

export default Home;
