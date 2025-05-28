import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Button, TextInput } from 'react-native-paper'

export default function AlunoForm({ navigation, route }) {
  const [nome, setNome] = useState('')

  function salvar(){
    alert('Nome preenchido: ' + nome)
  }

  return (
    <View style={styles.container}>
      <Text variant='titleLarge' style={{ marginTop: 10 }}>Informe os dados:</Text>

      <TextInput
        label='Nome'
        style={styles.input}
        mode='outlined'
        value={nome}
        onChangeText={setNome}
      />

      <Button
        style={styles.input}
        mode='contained'
        icon='plus'
        onPress={salvar}
      >
        Salvar
      </Button>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  input: {
    width: '90%',
    marginTop: 10
  }
})