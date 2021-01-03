import * as React from 'react';
import {useState} from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {

  const [sana, setSana] = useState('');

  const puhuNyt = () => {
    Speech.speak(sana);
  };

  
  return (
    <View style={styles.container}>
      <View>
      <Text>Kirjoita, mitä haluat kuulla.</Text>
      <TextInput placeholder='Mitä haluat kuulla?' style={{marginTop: 30, fontSize: 18, width: 200, borderColor: 'gray', borderWidth: 1}}
      onChangeText={ (sana) => setSana(sana) }
      value={sana}/>  
      </View>
      <Button title="Kuuntele" onPress={puhuNyt} />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 5,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

