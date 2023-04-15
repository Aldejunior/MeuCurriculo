
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Soueu from './src/pages/Soueu';
import Objetivo from './src/pages/Objetivo';
import Formacao from './src/pages/Formacao';
import Experiencia from './src/pages/Experiencia';

const Stack =createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Soueu" component={Soueu} />
      <Stack.Screen name="Objetivo" component={Objetivo} />
      <Stack.Screen name="Formacao" component={Formacao} />
      <Stack.Screen name="Experiencia" component={Experiencia} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};
