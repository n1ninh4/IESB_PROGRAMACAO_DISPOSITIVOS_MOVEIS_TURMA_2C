import React from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { Button, Text } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function LoginScreen({ navigation }) {
  const verificarCadastro = async () => {
    const dados = await AsyncStorage.getItem('usuario');
    if (dados) {
      navigation.replace('Home');
    } else {
      Alert.alert(
        'Cadastro necessário',
        'Você ainda não tem cadastro. Complete seus dados para continuar.',
        [{ text: 'Ok', onPress: () => navigation.navigate('Cadastro') }]
      );
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../images/logo.png')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.titulo}>Dom Lele Adega</Text>
      <Button mode="contained" onPress={verificarCadastro} style={styles.botao}>
        Entrar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  logo: {
    width: 350,
    height: 350,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  botao: {
    marginTop: 10,
    width: '100%',
    backgroundColor: '#ffd505',
  },
});
