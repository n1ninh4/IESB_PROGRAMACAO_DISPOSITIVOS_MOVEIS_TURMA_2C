import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-paper';
import BebidaService from '../services/BebidaService';



export default function HomeScreen({ navigation }) {
  const [categorias, setCategorias] = useState({});

  useEffect(() => {
    BebidaService.getAllCategorias().then((res) => setCategorias(res));
  }, []);

  const renderCategoria = (titulo, bebidas) => (
    <View key={titulo} style={styles.categoriaContainer}>
      <Text style={styles.categoriaTitulo}>{titulo}</Text>
      <FlatList
        data={bebidas}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingLeft: 10 }}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Cover source={{ uri: item.imagem }} style={styles.imagem} />
            <Card.Content>
              <Text numberOfLines={1} style={styles.nome}>{item.nome}</Text>
              <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => navigation.navigate('Detalhes', item)} textColor="#0077B6">
                Ver
              </Button>
            </Card.Actions>
          </Card>
        )}
      />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {Object.entries(categorias).map(([nome, bebidas]) =>
        renderCategoria(formatarTitulo(nome), bebidas)
      )}
    </ScrollView>
  );
}

const formatarTitulo = (nome) => {
  const map = {
    cervejas: 'Cervejas',
    cervejasZero: 'Cervejas Zero',
    refrigerantes: 'Refrigerantes',
    sucos: 'Sucos',
    vinhos: 'Vinhos',
    packs: 'Packs Econômicos',
    destilados: 'Destilados',
    outros: 'Drinks & Outros',
  };
  return map[nome] || nome;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  categoriaContainer: {
    marginVertical: 10,
  },
  categoriaTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginBottom: 6,
    color: '#1A1A1A',
  },
  card: {
    width: 150,
    marginRight: 12,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
  },
  imagem: {
    height: 100,
    resizeMode: 'contain',
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  preco: {
    fontSize: 14,
    color: '#0077B6',
    marginTop: 2,
  },
});
