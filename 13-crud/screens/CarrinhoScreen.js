import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Alert, Image } from 'react-native';
import { Text, Button, Card, IconButton } from 'react-native-paper';
import CarrinhoService from '../services/CarrinhoService';
import CustomHeader from '../components/CustomHeader';

export default function CarrinhoScreen({ navigation }) {
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', carregarCarrinho);
    return unsubscribe;
  }, [navigation]);

  const carregarCarrinho = async () => {
    const itens = await CarrinhoService.getAll();
    setCarrinho(itens);
  };

  const atualizarQuantidade = async (id, delta) => {
    const novoCarrinho = carrinho.map(item => {
      if (item.id === id) {
        const novaQtd = Math.max(1, (item.quantidade || 1) + delta);
        return { ...item, quantidade: novaQtd };
      }
      return item;
    });
    setCarrinho(novoCarrinho);
    await CarrinhoService.saveAll(novoCarrinho);
  };

  const removerItem = async (id) => {
    const novoCarrinho = carrinho.filter(item => item.id !== id);
    setCarrinho(novoCarrinho);
    await CarrinhoService.saveAll(novoCarrinho);
  };

  const finalizarPedido = () => {
    if (carrinho.length === 0) {
      Alert.alert('Carrinho vazio', 'Adicione bebidas antes de finalizar.');
      return;
    }
    navigation.navigate('Comprar', { itens: carrinho });
  };

  const total = carrinho.reduce((soma, item) => soma + item.preco * item.quantidade, 0).toFixed(2);

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.imagem }} style={styles.imagem} />
        <View style={styles.info}>
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.detalhes}>{item.volume} - R$ {item.preco.toFixed(2)}</Text>
          <View style={styles.qtdContainer}>
            <IconButton icon="minus" size={20} onPress={() => atualizarQuantidade(item.id, -1)} />
            <Text style={styles.qtd}>{item.quantidade}</Text>
            <IconButton icon="plus" size={20} onPress={() => atualizarQuantidade(item.id, 1)} />
            <IconButton icon="delete" size={20} onPress={() => removerItem(item.id)} />
          </View>
        </View>
      </View>
    </Card>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <CustomHeader navigation={navigation} title="Carrinho" />
      {carrinho.length === 0 ? (
        <View style={styles.vazioContainer}>
          <Text style={styles.vazioTexto}>🛒 Seu carrinho está vazio!</Text>
          <Button
            mode="contained"
            buttonColor="#0077B6"
            style={styles.botaoVazio}
            onPress={() => navigation.navigate('Home', { screen: 'Bebidas' })}
          >
            Ir para Bebidas
          </Button>
        </View>
      ) : (
        <FlatList
          data={carrinho}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          ListFooterComponent={
            <View style={styles.footer}>
              <Text style={styles.total}>Total: R$ {total}</Text>
              <Button
                mode="contained"
                onPress={finalizarPedido}
                style={styles.botao}
                buttonColor="#0077B6"
              >
                Finalizar Pedido
              </Button>
            </View>
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    elevation: 2,
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imagem: {
    width: 70,
    height: 70,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
  info: { flex: 1, marginLeft: 12 },
  nome: { fontSize: 16, fontWeight: 'bold', color: '#1A1A1A' },

  detalhes: { fontSize: 14, color: '#555' },

  qtdContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 6 },

  qtd: { fontSize: 16, fontWeight: 'bold', marginHorizontal: 10 },

  footer: { marginTop: 20, paddingTop: 10, borderTopWidth: 1, borderColor: '#ccc' },
  
  total: { fontSize: 18, fontWeight: '600', marginBottom: 10, textAlign: 'center' },
  
  botao: { borderRadius: 8, marginHorizontal: 20, paddingVertical: 8 },
  vazioContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  vazioTexto: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  botaoVazio: {
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
