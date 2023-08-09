import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Picker,Text, View, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './globalStyles';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';


export default function App() {
  const [moedaOrigem, setMoedaOrigem] = useState('BRL')
  const [moedaDestino, setMoedaDestino] = useState('USD')
  const [valorConvertido, setValorConvertido] =useState('')






  return (
    <View style={styles.container}>
      <View> style={styles.content}
        <View>
          <Text>Moeda 1</Text>
          <View style={styles.viewInput}>
            <Picker
            selectedValue={moedaOrigem}
            onValueChange={(itemValue, itemIndex) => setMoedaOrigem(itemValue)}
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
        </View>
        </View>
        <Text>Moeda 2</Text>
        <View style={styles.viewInput}>
          <TextInput>hy</TextInput>
          <AntDesign name="caretdown" size={15} color="black" />-
        </View>
      </View>
    </View>
  );
}


