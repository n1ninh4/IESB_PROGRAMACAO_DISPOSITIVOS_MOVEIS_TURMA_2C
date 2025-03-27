import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import JavascriptComponente from './componentes/JavascriptComponente';
import Perfil from './componentes/Perfil';
import ListaComponente from './componentes/ListaComponente';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />


      <ListaComponente />

      {/* <Perfil
        nome="Gustavo"
        idade={22}
        email="teste@gmail.com"
        telefone="61981111111"
      />

      <Perfil
        nome="João"
        idade={30}
        email="teste1@gmail.com"
        telefone="61981111112"
      />

      <Perfil
        nome="Maria"
        idade={18}
        email="maria@gmail.com"
        telefone="619800000001"
      /> */}



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
