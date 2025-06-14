import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';
import CarrinhoService from '../services/CarrinhoService';



export default function BebidaDetalhes({ route, navigation }) {
  const bebida = route.params;

  const adicionarAoCarrinho = async () => {
    await CarrinhoService.addItem(bebida);
    navigation.navigate('Home', { screen: 'Carrinho' });
  };

  const comprarAgora = () => {
    navigation.navigate('Comprar', { itens: [{ ...bebida, quantidade: 1 }] });
  };

  return (
    <View style={styles.container}>
        
      <Image source={{ uri: bebida.imagem }} style={styles.imagem} />

      <Text style={styles.nome}>{bebida.nome}</Text>
      <Text style={styles.tipo}>{bebida.tipo} - {bebida.volume}</Text>
      <Text style={styles.fabricante}>Fabricante: {bebida.fabricante}</Text>
      <Text style={styles.preco}>R$ {bebida.preco.toFixed(2)}</Text>

      <Button
        mode="contained"
        onPress={adicionarAoCarrinho}
        buttonColor="#fff"
        textColor="#000"
        style={styles.botao}
      >
        Adicionar ao Carrinho
      </Button>

      <Button
        mode="outlined"
        onPress={comprarAgora}
        textColor="#fff"
        style={styles.botaoSecundario}
      >
        Comprar Agora
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
    alignItems: 'center',
  },
  imagem: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
    textAlign: 'center',
  },
  tipo: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 4,
    textAlign: 'center',
  },
  fabricante: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  preco: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f8006',
    marginBottom: 20,
    textAlign: 'center',
  },
  botao: {
    width: '90%',
    borderRadius: 8,
    marginBottom: 10,
  },
  botaoSecundario: {
    width: '90%',
    borderRadius: 8,
    borderColor: '#ffd505',
    borderWidth: 1,
  },
});
