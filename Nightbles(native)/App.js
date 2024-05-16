import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Homepage } from './pagine/homepage';
import { Card } from './components/homepage/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Opep App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Homepage/>caacca
    </View>
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
