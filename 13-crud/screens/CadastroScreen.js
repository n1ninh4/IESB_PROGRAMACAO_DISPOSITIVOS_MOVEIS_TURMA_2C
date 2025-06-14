import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');

  const cadastrar = async () => {
    if (!nome || !telefone || !endereco) {
      alert('Preencha todos os campos');
      return;
    }

    const usuario = { nome, telefone, endereco };
    await AsyncStorage.setItem('usuario', JSON.stringify(usuario));
    navigation.replace('Home');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Image
        source={require('../images/logo.png')} // <-- ajuste o caminho conforme seu projeto
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.titulo}>Cadastro de Cliente</Text>

      <TextInput
        label="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />
      <TextInput
        label="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
        style={styles.input}
      />
      <TextInput
        label="Endereço"
        value={endereco}
        onChangeText={setEndereco}
        style={styles.input}
      />

      <Button mode="contained" onPress={cadastrar} style={styles.botao}>
        Finalizar Cadastro
      </Button>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  logo: {
    width: 350,
    height: 250,
    alignSelf: 'center',
    marginBottom: 10,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
  },
  input: {
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  botao: {
    marginTop: 10,
    backgroundColor: '#5e5c5c',
  },
});
