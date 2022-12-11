import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [money , onChangeNumber] = useState('')
  const [usd, setUsd] = useState('')
  const [baht, setBaht] = useState('')
  const [yuan, setYuan] = useState('')
  const onPress = () => {

    setUsd((parseInt(money) / 2500).toString())
    setBaht((parseInt(money) / 120).toString())
    setYuan((parseInt(money) / 1300).toString())

  }
  return (
    <View style={styles.container}>
      <Text>MMK</Text>
      <TextInput      
        style={styles.input}
        placeholder="Enter Kyats"
        keyboardType="numeric"
        onChangeText = {text => onChangeNumber(text)}
        value = {money}
         />
      <View style={{
      height: 40,
      margin: 12,
      paddingHorizontal: 96,
      

      }}>
        <Button
        title="CONVERT"
        onPress={onPress}
        />
        <Text>
         USD = {usd}
        </Text>
        <Text>
          YUAN = {yuan}
        </Text>
        <Text>
          BAHT = {baht}
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 120,
    paddingLeft: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingHorizontal: 96,
  }
 
});

