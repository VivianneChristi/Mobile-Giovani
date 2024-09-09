import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Prime from './src/Screen/Prime';

export default function App() {
  return (
    <ScrollView>
      <Prime/>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

