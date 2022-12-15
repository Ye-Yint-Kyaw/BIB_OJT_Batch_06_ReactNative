import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ScrollView horizontal={true}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
        </ScrollView>

        <View style={{flexDirection:'row'}}>
          <View style={styles.smallbox}></View>
          <View style={styles.textbox}><Text style={styles.text}>Lorem ipsum</Text></View>
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={styles.smallbox}></View>
          <View style={styles.textbox}><Text style={styles.text}>Lorem ipsum</Text></View>
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={styles.smallbox}></View>
          <View style={styles.textbox}><Text style={styles.text}>Lorem ipsum</Text></View>
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={styles.smallbox}></View>
          <View style={styles.textbox}><Text style={styles.text}>Lorem ipsum</Text></View>
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={styles.smallbox}></View>
          <View style={styles.textbox}><Text style={styles.text}>Lorem ipsum</Text></View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   paddingTop: 100,
   paddingHorizontal: 30,
   paddingBottom: 50
  },
 
  box: {
    width: 300,
    height: 300,
    backgroundColor: '#c4c4c4',
    marginRight: 15,
    marginBottom: 0
  },
  smallbox: {
    marginTop: 50,
    width: 100,
    height: 100,
    backgroundColor: '#c4c4c4',
  },
  textbox: {
    width: 170,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: '#c4c4c4',
  }
 
});
