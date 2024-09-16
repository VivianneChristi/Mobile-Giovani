import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Prime from './src/Screen/Prime';
import Texto from './src/Components/Texto';
import Contador from './src/Components/Contador';

export default function App() {
  return (
    <ScrollView>
      <Prime/>
      <Texto />
      <Contador/>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

