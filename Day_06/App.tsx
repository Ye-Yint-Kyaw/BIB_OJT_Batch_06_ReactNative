import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, TouchableOpacity,FlatList, Alert} from 'react-native';

export default function App() {
  const [newitem, setNewitem] = useState<string[]>([])
  const [newdata, onChangeText] = useState('')
  const onPress = () => {
    data.push(newdata)
  }
  const Item = () => {
    return (
      <View style={styles.itemcontainer}>
        <TouchableOpacity onPress={()=>Alert.alert(newitem.toString())}>
           <Text style={styles.itemtext}>{newitem}</Text>
        </TouchableOpacity>
      </View>
    )
  }
  const data = ['Bruce Wayne' , 'Cassandra Cain' , 'Barbara Gordon']
  setNewitem(data)
  const renderItem = () => {
    return (<Item/>)
  }
  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <Text style={styles.text}>Day 06 Assignment</Text>
      </View>

      <View style={styles.inputarea}>
        <TextInput
        placeholder='Enter data'
        style={styles.inputdata}
        onChangeText={onChangeText}
        />
       <TouchableHighlight style={styles.btn} 
       onPress={onPress}
       >
        <Text style={styles.btntext}>Add</Text>
       </TouchableHighlight>
      </View>

      <FlatList
      data = {data}
      renderItem = {renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
  padding: 0
 },
  bar: {
  backgroundColor: '#b501af',
  position: 'relative',
  width: '100%',
  height: 100
 },
 text: {
  fontWeight: '700',
  fontSize: 20,
  color: '#fff',
  width: '100%',
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: [{translateX: -75}],
 },
inputarea: {
  marginTop: 20,
  padding: 10,
  flexDirection: 'row'
},
inputdata: {
  borderStyle: 'solid',
  borderWidth: 1,
  padding: 10,
  width: '75%',
  marginRight: 20
},
btn: {
  paddingHorizontal: 26,
  backgroundColor: '#8d0089',
  paddingTop: 5
},
btntext: {
  alignSelf: 'center',
  color: '#fff',
  fontWeight: '700',
  top: 10
},
itemtext: {
  paddingVertical: 10
},
itemcontainer: {
  borderBottomWidth: 1,
  borderBottomColor: '#000',
  margin: 10
},
flatcontainer: {
  width: '100%'
}

});
