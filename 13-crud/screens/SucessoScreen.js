import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';


export default function SucessoScreen({ navigation }) {
  useEffect(() => {
    // Você pode adicionar efeitos ou delay aqui se quiser
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/845/845646.png',
        }}
        style={styles.icone}
      />

      <Text style={styles.titulo}>Pedido Realizado!</Text>
      <Text style={styles.subtitulo}>
        Obrigado por comprar com a DomLele. Seu pedido está a caminho!
      </Text>

      <Button
        mode="contained"
        onPress={() => navigation.replace('Home')}
        style={styles.botao}
        buttonColor="#0077B6"
      >
        Voltar para o Início
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  icone: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
  },
  botao: {
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
});
