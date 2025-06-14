import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Searchbar, Card, Text } from 'react-native-paper';
import BebidaService from '../services/BebidaService';


export default function BuscarScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const [resultado, setResultado] = useState([]);
  const [sugestoes, setSugestoes] = useState([]);

  useEffect(() => {
    async function carregarSugestoes() {
      const bebidas = await BebidaService.getAllCategorias();
      const todas = Object.values(bebidas).flat();
      setSugestoes(todas.slice(0, 6)); // exibe as 6 primeiras como sugestão
    }
    carregarSugestoes();
  }, []);

  const buscarBebidas = async (texto) => {
    setQuery(texto);
    if (!texto.trim()) {
      setResultado([]);
      return;
    }

    const bebidas = await BebidaService.getAllCategorias();
    const todas = Object.values(bebidas).flat();

    const filtradas = todas.filter((item) =>
      item.nome.toLowerCase().includes(texto.toLowerCase())
    );
    setResultado(filtradas);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Detalhes', item)}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: item.imagem }} style={styles.imagem} />
        <Card.Content>
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Buscar bebida"
        onChangeText={buscarBebidas}
        value={query}
        style={styles.searchbar}
        inputStyle={{ fontSize: 16 }}
        iconColor="#0077B6"
      />

      {!query && (
        <>
          <Text style={styles.titulo}>Sugestões populares</Text>
          <FlatList
            data={sugestoes}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 10 }}
          />
        </>
      )}

      {query && resultado.length > 0 && (
        <FlatList
          data={resultado}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.lista}
        />
      )}

      {query && resultado.length === 0 && (
        <Text style={styles.nenhum}>Nenhuma bebida encontrada.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  searchbar: {
    marginBottom: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft: 4,
    color: '#fff',
  },
  card: {
    width: 150,
    height: 240,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
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
    marginTop: 5,
  },
  preco: {
    fontSize: 14,
    color: '#0077B6',
    marginTop: 2,
  },
  lista: {
    paddingBottom: 20,
  },
  nenhum: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#999',
  },
});
