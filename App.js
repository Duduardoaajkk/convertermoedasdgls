import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [moedaOrigem, setMoedaOrigem] = useState('BRL')
  const [moedaDestino, setMoedaDestino] = useState('USD')
  const [valorConvertido, setValorConvertido] = useState('')
  const [valorOriginal, setValorOriginal] = useState("33.33333")

  const buscarHandle = async () => {
    let URL = `https://economia.awesomeapi.com.br/last/${moedaOrigem}-${moedaDestino}`
    try {
      let page = await fetch(URL)
      let json = await page.json()
      console.log(json)
      let indice = parseFloat(json[`${moedaOrigem}${moedaDestino}`].high)
      setValorConvertido(indice)
    } catch (error) {
      setValorConvertido(`Erro: ${error.message}`)
    }
    // setValorConvertido(URL);
  }

  const handleLimpar = () => {
    setValorConvertido ('');
    setValorOriginal("33.3333")
    setMoedaOrigem('BRL')
    setMoedaDestino('USD')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moedas</Text>
      <View>
        <Text style={styles.taMoeda}>Moeda 1</Text>
        <Picker
          style={{ height: 50, width: 200 }}
          selectedValue={moedaOrigem}
          onValueChange={(itemValue, itemIndex) => setMoedaOrigem(itemValue)}
        >
          <Picker.Item label="Real Brasileiro" value="BRL" />
          <Picker.Item label="Dólar Americano" value="USD" />
          <Picker.Item label="Ouro" value="XAU" />
          <Picker.Item label="Bitcoin" value="BTC" />
        </Picker>
      </View>
      <View>
        <Text style={styles.taMoeda}>Moeda 2</Text>
        <Picker
          style={styles.picker}
          selectedValue={moedaDestino}
          onValueChange={(itemValue, itemIndex) => setMoedaDestino(itemValue)}
        >
          <Picker.Item label="Real Brasileiro" value="BRL" />
          <Picker.Item label="Dólar Americano" value="USD" />
          <Picker.Item label="Ouro" value="XAU" />
          <Picker.Item label="Bitcoin" value="BTC" />
        </Picker>
      </View>
      <View>
        <TextInput value={valorOriginal} onChangeText={setValorOriginal} keyboardType="numeric"/>
      </View>
      <Pressable onPress={buscarHandle} style={styles.pressable}><Text>Buscar Valor</Text></Pressable>
      <Text style={styles.laResultado}>{`Resultado: ${valorConvertido}`}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff'
  },
  picker: {
    color: '#fff',
    width: 200,
    height: 50,
    backgroundColor: '#000'
  },
  input: {
    color: '#fff',
    textAlign: 'right',
    height: 40,
    width: 200
  },
  taMoeda: {
    color: '#fff'
  },
  pressable: {
    width: 200,
    height: 40,
    paddingBottom: 10,
    backgroundColor: '#999',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  laResultado: {
    color: '#fff'
  }
});