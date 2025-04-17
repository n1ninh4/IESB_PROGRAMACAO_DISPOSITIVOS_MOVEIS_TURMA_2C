import React from 'react';
import { View, FlatList } from 'react-native';
import { Card, Text, Avatar } from 'react-native-paper';

export default function OlimpiadasScreen() {

  // ABA - Olimpíadas
  const olimpiadas = {
    nome: "Jogos Olímpicos de Verão de 2024",
    local: "Paris, França",
    dataInicio: "26 de julho de 2024",
    dataFim: "11 de agosto de 2024",
    organizacao: "Comitê Olímpico Internacional",
    imagem: "https://i.pinimg.com/236x/79/27/be/7927bea5c23a8b755bbde5fa8211cd89.jpg",
    edicao: 33,
    mascotes: [
      {
        id: "1",
        nome: "Phryge Olímpico",
        descricao: "Mascote dos Jogos Olímpicos",
        imagem: "https://i.pinimg.com/236x/17/82/f3/1782f3d30b0210d4f36131bf27b6bb4c.jpg"
      },
      {
        id: "2",
        nome: "Phryge Paralímpico",
        descricao: "Mascote dos Jogos Paralímpicos",
        imagem: "https://i.pinimg.com/236x/81/19/d1/8119d1ec0e8a0e30cf426b25c5dc517a.jpg"
      }
    ]
  };


  return (
    <View>
      <Card style={{ margin: 10, borderRadius: 10}}>
        <Card.Cover source={{ uri: olimpiadas.imagem }} style={{ height: 350}}/>
        <Card.Content>
          <Card.Title title={olimpiadas.nome} />
          <Text>Organização: {olimpiadas.organizacao}</Text>
          <Text>Local: {olimpiadas.local}</Text>
          <Text>Data de Início: {olimpiadas.dataInicio}</Text>
          <Text>Data de Finalização: {olimpiadas.dataFim}</Text>
          <Text>Edição: {olimpiadas.edicao}</Text>
        </Card.Content>
        <Card.Actions>
          <FlatList
          data={olimpiadas.mascotes}
          renderItem={
            ({item}) => (
              <Card.Title
                title={item.nome}
                subtitle={item.descricao}
                left={(props) => <Avatar.Image {...props} source={{ uri: item.imagem }} />}
              />
            )
          }


          />
        </Card.Actions>
      </Card>



    </View>
  )
}
