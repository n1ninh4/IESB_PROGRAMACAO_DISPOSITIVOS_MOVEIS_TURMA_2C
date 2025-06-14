import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';
import BebidaService from '../services/BebidaService';
import CustomHeader from '../components/CustomHeader';

export default function BebidaLista({ navigation }) {
  const [bebidas, setBebidas] = useState({});

  useEffect(() => {
    BebidaService.getAllCategorias().then(setBebidas);
  }, []);

  const renderBebida = ({ item }) => (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: item.imagem }} style={styles.imagem} />
      <Card.Content>
        <Text numberOfLines={1} style={styles.nome}>{item.nome}</Text>
        <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
      </Card.Content>
      <Card.Actions>
        <Button
          onPress={() => navigation.navigate('Detalhes', item)}
          mode="contained"
          buttonColor="#000"
          textColor="#fff"
          style={styles.botao}
        >
          Detalhes
        </Button>
      </Card.Actions>
    </Card>
  );

  const renderCategoria = (titulo, lista) => (
    <View key={titulo} style={styles.categoriaContainer}>
      <Text style={styles.titulo}>{titulo}</Text>
      <FlatList
        data={lista}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderBebida}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <CustomHeader navigation={navigation} title="Bebidas" />
      <FlatList
        data={Object.keys(bebidas)}
        keyExtractor={(key) => key}
        renderItem={({ item }) =>
          renderCategoria(
            item.charAt(0).toUpperCase() + item.slice(1),
            bebidas[item]
          )
        }
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // fundo preto
    paddingHorizontal: 0,
  },
  categoriaContainer: {
    marginBottom: 24,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 12,
    color: '#fff',
    marginLeft: 12,
  },
  card: {
    width: 150,
    height: 250,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginRight: 12,
    marginLeft: 10,
    elevation: 2,
  },
  imagem: {
    height: 120,
    resizeMode: 'contain',
    backgroundColor: '#fff',
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginTop: 6,
  },
  preco: {
    fontSize: 14,
    color: '#0077B6',
    marginTop: 2,
  },
  botao: {
    marginTop: 10,
    borderRadius: 6,
    width: '100%',
  },
});
