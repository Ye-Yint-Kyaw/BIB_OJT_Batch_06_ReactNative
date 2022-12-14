import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const fruits = ['Apple', 'Orange','Banana', 'Grape', 'Tomato'];
  const [show, setShow] = useState<string[]>([]);
  const upper_item = fruits.map(up => up.toUpperCase());
  const [value, onChangeText] = useState(''); 
  const [filtered, setFiltered] = useState<string[]>([]);
  
  return (
    <View style={styles.container}>
      <Text>Original Array</Text>
      <Text>{fruits}</Text>
      <View>
        <Button
        title='CHANGE TO UPPER CASE'
        onPress = {() => setShow(upper_item)}
        />
      </View>
      <Text>Upper Case Array</Text>
      <Text>{show}</Text>
      
      <View>
        <TextInput
        placeholder='Enter something to filter'
        onChangeText={ text => onChangeText(text)}
        value = {value}
        />
        <Button
        title='FILTER ARRAY WITH INPUT'
        onPress={ () => setFiltered(fruits.filter( val => val.includes(value) ))}
        />
      </View>
      <Text>Filter Array</Text>
      <Text>{filtered}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#fff',

  },
});
