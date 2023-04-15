import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Soueu from './src/pages/Soueu';
import Objetivo from './src/pages/Objetivo';
import Formacao from './src/pages/Formacao';


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Soueu" component={Soueu} />
      <Stack.Screen name="Objetivo" component={Objetivo} />
      <Stack.Screen name="Formacao" component={Formacao} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
