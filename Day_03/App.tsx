import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Original Array</Text>
      <Text>[Apple, Orange,Banana, Grape, Tomato]</Text>
      <Text>Original Array</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#fff',

  },
});
